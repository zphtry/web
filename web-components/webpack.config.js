const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const extract_sass = new ExtractTextPlugin({
    // filename: '[name].[contenthash].css',
    filename: '[name].css',
    allChunks: true
});

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    main: './main',
    // styles: './styles.sass'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'root'
  },

  module: {
      rules: [
        {
          test: /\.sass$/,
          use: extract_sass.extract({
              use: [{loader: 'css-loader'}, {loader: 'sass-loader'}],
              // use style-loader in development
              fallback: 'style-loader'
          })
        },

        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
    ]
  },

  plugins: [
    extract_sass,
    new HtmlWebpackPlugin({
      template: './index'
    }),
    new CleanWebpackPlugin(['dist']),
  ],


  resolve: {
    extensions: ['.js', '.sass', '.html']
  },

}