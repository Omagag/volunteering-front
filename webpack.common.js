const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './webapp/app.index.js'
  },
  plugins: [
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Render index.html
    new HtmlWebpackPlugin({
      favicon: './webapp/assets/img/favicon.ico',      
      filename: './index.html',
      template: './webapp/index.ejs',
      inject: 'head',
      chunks: ['app', 'vendor']
    }),
    // Clean folder in each build
    new CleanWebpackPlugin(path.resolve(__dirname, 'src/web')),
    new ExtractTextPlugin('[name].style.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({ browsers: 'last 2 versions' }),
        ]
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, 'src/web'),
    publicPath: '/',
    //Chunkfilename & filename in each version
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['stage-0', 'es2015'],
            cacheDirectory: true,
            plugins: ['transform-runtime'],
            comments: true
          }
        },
        { loader: 'eslint-loader' }
        ]
      },
      { // Styles
        test: /\.(scss|sass)$/,

        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer'),
              ]
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|ico|gif|svg)$/i,
        use: [
          'file-loader'
        ]
      },
      { // FONTS
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      { // FONTS
        test: /\.(html)$/,
        use: [
          { loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, 'webapp')) },
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              attrs: ['img:src', 'img:ng-src']
            }
          }
        ]
      },
    ]
  }
}
