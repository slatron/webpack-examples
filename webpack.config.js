const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

// Helper methods and consts to build page individual page configs
// - should be in separate module post-POC
const msg = `
<p>
  This MPA model is closest the current gulp build. Each page of the application calls the same javascript bundle.
</p>

<p>
  Compared to the <a href="https://github.com/slatron/webpack-examples/tree/mpa-agnostic-multiple-bundles" target="_blank">multiple bundle example</a>, this uses a data-load attribute on each html page button. Clicking the button calls the same method to call the API with a different parameter.
</p>

<p>
  If we go with a MPA approach, we should use this model to keep the number of bundles at one. If we need greater isolation between pages, we can try a multiple bundle approach at that time.
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
  return new HtmlWebpackPlugin({
    title,
    filename: `${title.toLowerCase()}.html`,
    template: `./dev/pages/${title.toLowerCase()}.html`,
    nav,
    msg
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
    nav,
    msg
  })
]

module.exports = {
  entry: {
    main: './dev/index.js',
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
