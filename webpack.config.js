const path = require('path')
const webpack = require('webpack')
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
        exclude:/node_modules/}]
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
  new webpack.DefinePlugin({
    'API_KEY': JSON.stringify(process.env.API_KEY),
  })
]

}
