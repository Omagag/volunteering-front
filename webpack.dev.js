const webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],
  devtool: 'inline-source-map',
};