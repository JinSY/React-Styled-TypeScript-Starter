const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 5000,
    proxy: {
      /* useful for proxying localhost api here */
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})