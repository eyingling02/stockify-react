const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/Stockify.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
  publicPath: '/public/',
  historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
