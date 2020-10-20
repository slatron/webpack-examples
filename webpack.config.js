const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const generateHtmlPlugin = (title) => {
  return new HtmlWebpackPlugin({
    title,
    filename: `${title.toLowerCase()}.html`,
    template: `./dev/pages/${title.toLowerCase()}.html`,
  });
}

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
  })
  return res;
}

const pages = populateHtmlPlugins([
  "Photos",
  "Todos"
]);

const indexPage = [
  new HtmlWebpackPlugin({
    title: 'Home',
    template: path.resolve(__dirname, "dev", "index.html")
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
