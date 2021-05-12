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
    checkOptions: {
      reportFiles: [`../src/${packageName ? packageName + "/" : ""}**/*.{ts|tsx}`],
    },
  },
  webpackFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@cb-general/core': path.resolve(__dirname, '../src/core/src/'),
      '@cb-general/weekend': path.resolve(__dirname, '../src/weekend/src/'),
      '@cb-general/wf': path.resolve(__dirname, '../src/wf/src/'),
    };
    return config;
  },
}