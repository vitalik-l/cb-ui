const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const sassModuleRegex = /\.module\.(scss|sass)$/;

function getStyleLoaders(options) {
  return [
    {
      test: /\.(sa|sc|c)ss$/,
      exclude: sassModuleRegex,
      use: [
        MiniCssExtractPlugin.loader,
        {loader: 'css-loader', options: {importLoaders: 2}},
        'postcss-loader',
        'resolve-url-loader',
        {loader: 'sass-loader', options: {sourceMap: true}}
      ]
    },
    {
      test: sassModuleRegex,
      use: [
        MiniCssExtractPlugin.loader,
        {loader: 'css-loader', options: {
            importLoaders: 1,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            }
          }},
        'postcss-loader',
        {loader: 'sass-loader', options: {sourceMap: true}}
      ],
    },
  ]
}