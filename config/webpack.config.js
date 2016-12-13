const path = require('path');
const webpack = require('webpack');
const ETPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/scripts/index.js'),
    vendor: ['jquery', 'materialize-css']
  },
  output: {
    path: path.join(__dirname, '../public/build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.scss$/, loader: ETPlugin.extract('style', 'css!sass')},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)/, loader: 'url-loader?limit=1024'},
      {test: /\.json$/, loader: 'json'}
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ETPlugin('./css/style.css')
  ],
  node: {
    fs: 'empty'
  }
};