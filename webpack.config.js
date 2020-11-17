const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

const generateSetting = require('./webpack_config/generateSetting')
const getFilesFromDir = require('./webpack_config/files')
const PAGE_DIR = path.join('dev', 'pages', path.sep)

// Generate entry setting for javscript files in PAGE_DIR
const jsFiles = getFilesFromDir(PAGE_DIR, ['.js'])
const entry = generateSetting.entry(jsFiles)

// Generate entry setting for html files in PAGE_DIR
const htmlFiles = getFilesFromDir(PAGE_DIR, ['.html'])
const htmlPlugins = generateSetting.htmlPlugins(htmlFiles)

module.exports = (env, argv) => {
  // This will be replaced by the actual tag version from the command line
  // - TODO: How to read tag string here from command line
  const tag = argv.tag || '0.0.0'

  return {
    devtool: 'source-map',
    // Create js bundle for each page:
    entry,

    // Replace entry with this to bundle all js into one main.tag.js file
    // - This would be a large single download like the current application
    // - as opposed to one js file per page
    // - See comment in /webpack_config/gerenateSettngs.js for additional change
    // entry: {
    //   main: './dev/pages/index.js'
    // },

    // generates js files for pages
    output: {
      path: path.resolve(__dirname, "app"),
      filename: `[name].${tag}.js`
    },

    // Put each html page in its own file
    plugins:[
      ...htmlPlugins,
      require('autoprefixer')
    ],

    // Create alias for reslving pathname imports
    // - this allows for non-relative imports
    // - import 'components/foo' instead of import '../../../components/foo'
    resolve: {
      alias: {
        dev: path.resolve(__dirname, 'dev'),
        components: path.resolve(__dirname, 'dev', 'components'),
        scss: path.resolve(__dirname, 'dev', 'scss'),
        pages: path.resolve(__dirname, 'dev', 'pages')
      }
    },

    // Precompile JS into ES5 for browser compatability
    module: {
      rules: [
        {
          test: /\.(gif|png|svg|jpg)$/,
          exclude: path.resolve(__dirname, './dev/fonts'),
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        },
        {
          test: /\.(ttf|eot|woff|woff2|svg)$/,
          include: path.resolve(__dirname, './dev/fonts'),
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              esModule: false
            },
          },
        },
        // Uncomment to support plain css files
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader", "postcss-loader"]
        // },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader:  "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },

    // Split vendor files into seprate bundle
    // - These files do not change often and should be cached separately
    // - Affects "dependencies" packages in package.js
    optimization: {
      minimize: argv.mode === 'production' ? true : false,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true
          }
        }
      }
    }
  } // End webpack.config object returned
}
