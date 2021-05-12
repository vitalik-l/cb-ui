const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const styleVariablesImporter = require('./styleVariablesImporter');

const sassModuleRegex = /\.module\.(scss|sass)$/;

const postCssLoader = [{
  loader: 'postcss-loader',
  plugins: () => [require('autoprefixer'), require('postcss-preset-env')],
}];

const defaultOptions = {
  variables: {},
};

module.exports = function getStyleLoaders(options = defaultOptions) {
  const { variables } = options;

  return [
    {
      test: /\.(sa|sc|c)ss$/,
      exclude: sassModuleRegex,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 2 } },
        ...postCssLoader,
        'resolve-url-loader',
        { loader: 'sass-loader', options: { sourceMap: true } },
      ],
    },
    {
      test: sassModuleRegex,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
        },
        ...postCssLoader,
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              importer: styleVariablesImporter(variables),
            },
          },
        },
      ],
    },
  ];
};
