const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
      test: /\.css$/,
      use: [ {loader: 'style-loader'},
        {loader:'css-loader'}]
      }
    ]
  }
};