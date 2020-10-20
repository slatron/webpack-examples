const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

// Helper methods and consts to build page individual page configs
// - should be in separate module post-POC
const msg = `
<p>
  Compared to the <a href="https://github.com/slatron/webpack-examples/blob/mpa-agnostic-single-bundle/readme.md" target="_blank">single bundle example</a>, this removes the data-load attribute from the buttons on the html pages. Each page relies on its own javascript flie to call the separate APIs. This js bundle per page could be used to compleetly isolate each page of the APP as its own SPA.
</p>

<p>
  At this time, we should stop persuing this path. It seems very wasteful to generate so many bundles. We should remember this model in case we see a reason to strongly isolate MPA pages.
</p>
`

const nav = `
<nav>
  <ul>
    <li><a href="/photos.html">photo page</a></li>
    <li><a href="/todos.html">todo page</a></li>
  </ul>
</nav>
`
const generateHtmlPlugin = (title) => {
  const lowerTitle = title.toLowerCase()
  return new HtmlWebpackPlugin({
    title,
    filename: `${lowerTitle}.html`,
    template: `./dev/pages/${lowerTitle}.html`,
    chunks: [lowerTitle],
    msg,
    nav
  });
}

const populateHtmlPlugins = (pagesArray) => {
  let plugins = []
  pagesArray.forEach(page => {
    plugins.push(generateHtmlPlugin(page))
  })
  return plugins
}

const pages = populateHtmlPlugins([
  "Photos",
  "Todos"
]);

const indexPage = [
  new HtmlWebpackPlugin({
    title: 'Home',
    template: path.resolve(__dirname, "dev", "index.html"),
    chunks: ['main'],
    msg,
    nav
  })
]

module.exports = {
  entry: {
    main: './dev/index.js',
    photos: './dev/pages/photos.js',
    todos: './dev/pages/todos.js'
  },
  output: {
    path: path.resolve(__dirname, "app"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      }
    ]
  },
  // optimization: {
  //   splitChunks: { chunks: "all" }
  // },
  plugins: [...pages, ...indexPage]
}
