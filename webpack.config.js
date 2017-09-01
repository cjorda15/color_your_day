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
        exclude:/node_modules/},
        {
         test: /\.scss$/,
         loaders: ["style-loader", "css-loader", "sass-loader"]
       },
             {
              test: /\.css$/,
              loaders: ["style-loader", "css-loader"]
                  },
        {
  test: /\.(jpg|png|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 25000,
  },
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
  new webpack.DefinePlugin({
    'MAP_API_KEY': JSON.stringify(process.env.MAP_API_KEY),
    'WEATHER_API_KEY':JSON.stringify(process.env.WEATHER_API_KEY)
  })
]

}
