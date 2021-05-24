const path = require('path');
const styleVariablesImporter = require('@cb-general/dev-utils/styleVariablesImporter');

const [ packageName ] = process.argv.slice(5);

const importStyleVariables = (config) => {
  const mapRule = rule => {
    if (rule.use) {
      rule.use = rule.use.map(ruleUse => {
        if (ruleUse.loader) {
          if (ruleUse.loader.indexOf('sass-loader') !== -1) {
            ruleUse.options.sassOptions = {
              importer: styleVariablesImporter({ stylesPath: path.resolve(__dirname) }),
            };
          }
        }
        return ruleUse;
      });
    }
    return rule;
  }
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf) {
      rule.oneOf = rule.oneOf.map(mapRule);
    }
    return rule;
  });
};

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
    importStyleVariables(config);
    return config;
  },
}