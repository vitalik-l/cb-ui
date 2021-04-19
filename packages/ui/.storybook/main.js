const path = require('path');

const [ packageName ] = process.argv.slice(6);

module.exports = {
  "stories": [
    `../src/${packageName ? packageName + "/" : ""}**/*.story.@(js|jsx|ts|tsx|mdx)`
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  typescript: {
    check: true,
  },
  webpackFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@cb-general': path.resolve(__dirname, '../src/'),
    };
    return config;
  },
}