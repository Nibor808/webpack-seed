const path = require('path');

module.exports = {
  entry: {
    main: "./src/scripts/index.js",
    contact: "./src/scripts/contact.js",
  },
  output: {
    path: path.join(__dirname, "public/build"),
    filename: "[name].js",
    publicPath: "/build/"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {test: /\.scss/, loader: "style!css!sass"},
      {test: /\.js/, loader: "babel", exclude: /node_modules/},
      {test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)/, loader: "url-loader?limit=1024"}
    ]
  }
};