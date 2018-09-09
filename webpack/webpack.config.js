'use strict';

var path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack');



module.exports = [{
  context: path.resolve(__dirname, 'frontend'),
  // entry: './app.js',
  entry: {
    app: './app.js',
    // about: './about',
    // // common: ['./common', './welcome']
    // common: ['./welcome', './common']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // filename: 'build.js',
    // library: 'home',
    publicPath: '/',
    filename: '[name].build.js',
    // library: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

      // { test: /\.css$/, use: 'css-loader' },
      // { test: /\.ts$/, use: 'ts-loader' },

      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     }
      //   ]
      // }
    ]
  },

  // plugins: [
  //   // new webpack.EnvironmentPlugin('NODE_ENV', 'USER')
  //   new webpack.DefinePlugin({
  //     NODE_ENV: JSON.stringify(NODE_ENV)
  //   }),
  //   new webpack.NoEmitOnErrorsPlugin(),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "common",
  //     minChunks: 2,
  //   }),

  //   // new webpack.optimize.CommonsChunkPlugin({
  //   //   name: "common-1",
  //   //   chunks: ['home', 'about']
  //   // })
  // ],


  resolveLoader: {
    modules: ["node_modules"],
    moduleExtensions: ['-loader'],
    extensions: ["*", ".js"]
  },

  // watch: true,
  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 300
  },

  // devtool: 'source-map'
  // devtool: 'inline-source-map'
  // devtool: 'cheap-inline-module-source-map'
  // devtool: 'eval'
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : undefined,

  // devServer: {
  //   contentBase: path.join(__dirname, "public"),
  //   compress: true,
  //   port: 9000
  // }
}]


// if(NODE_ENV == 'production') {
//   module.exports.plugins.push(
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           warnings: false,
//           drop_console: true,
//           unsafe: true
//         }
//       })
//     )
// }