var path = require('path');

module.exports = {
  context: path.resolve(__dirname) + "/app",
  target: "web",
  debug: true,
  resolve: {
    extensions: ['', '.jsx', '.es6', '.js', '.scss']
  },
  devtool: "source-map",

  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: path.resolve(__dirname) + "/dist",
  },


  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"],
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }],
  }
}