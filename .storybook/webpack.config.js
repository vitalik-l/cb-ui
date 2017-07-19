const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
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