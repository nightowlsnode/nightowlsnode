const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractNormalCSS = new ExtractTextPlugin("style.css");

module.exports = {
  entry: './app/App.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  },
};