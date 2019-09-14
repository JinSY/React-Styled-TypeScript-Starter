const path = require('path')
const ThreadLoader = require('thread-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')

const entry = {
  main: ['./src/index.tsx'],
}

const output = {
  path: path.join(__dirname, '/dist'),
  filename: 'index_bundle.js',
}

const rules = [
  {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'thread-loader',
        options: {
          workers: 2,
        },
      },
      'babel-loader',
    ],
  },
]

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new ForkTsCheckerWebpackPlugin(),
  new ForkTsCheckerNotifierWebpackPlugin(),
]

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}

module.exports = {
  entry: entry,
  output: output,
  plugins: plugins,
  resolve: resolve,
  module: {
    rules: rules,
  },
}
