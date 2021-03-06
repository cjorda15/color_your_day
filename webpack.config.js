const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
require('dotenv').config()


module.exports = {
  entry:["./src/index.js"],
  output:{
    path: path.resolve(__dirname,"build"),
    filename:"bundle.js",
  },
  module:{
    loaders:[
      {test:/\.js$/,
       loaders:"babel-loader",
        exclude:/node_modules/},
      {test:/\.jsx$/,
       loaders:"babel-loader",
        exclude:/node_modules/},
      { test: /\.s?css$/,
       loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]},
      {test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
        limit: 25000},
      },]
    },
  resolve: {
  extensions: ['.js', '.jsx', '.json', '.scss', '.css']
  },
  node: {
    net: "empty",
    tls: "empty",
    fs:  "empty"
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
    'MAP_API_KEY': JSON.stringify(process.env.MAP_API_KEY),
  })
 ]
}
