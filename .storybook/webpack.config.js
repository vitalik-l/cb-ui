const path = require('path');

const imgPath = path.resolve(__dirname, '../dist/img');
module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.png$/,
        include: path.resolve(__dirname, '../'),
        loader: 'url-loader?limit=15000&mimetype=image/png'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, '../'),
        loader: 'url-loader?limit=10000&name=../fonts/[name].[ext]'
      }
    ]
  }
};