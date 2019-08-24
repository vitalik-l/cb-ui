const path = require('path');

module.exports = {
  module: {
    rules: [
      {
          test: /.+\.story\.js?x/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
      },
      {
        test: /\.css$/,
        // exclude: /node_modules(?!\/@storybook\/addon-info)/,
        include: path.resolve(__dirname, '../'),
        loaders: ['style-loader', 'css-loader']
      },
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
        test: /\.(otf|eot|svg|ttf|woff|webp|woff2)$/,
        include: path.resolve(__dirname, '../'),
        loader: 'url-loader?limit=10000&name=../fonts/[name].[ext]'
      }
    ]
  }
};