var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [
    // 'babel-polyfill',
    path.resolve(__dirname, 'src','index.js'),
  ],
  output: {
    publicPath: './build/',
    filename: 'app.js'
  },
  debug: true,
  // devtool: 'source-map',
  module: {
    loaders: [{
      loader: "babel-loader",
      include: [
        path.resolve(__dirname, "src"),
      ],
      test: /\.jsx?$/,
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react'],
      }
    }]
  }
};
