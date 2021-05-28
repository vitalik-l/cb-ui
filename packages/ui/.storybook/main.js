const path = require('path');
const fs = require('fs');
const styleVariablesImporter = require('@cb-general/dev-utils/styleVariablesImporter');

const [ packageName ] = process.argv.slice(5);

const importStyleVariables = (config) => {
  const mapRule = rule => {
    if (rule.use) {
      rule.use = rule.use.map(ruleUse => {
        if (ruleUse.loader) {
          if (ruleUse.loader.indexOf('sass-loader') !== -1) {
            ruleUse.options.sassOptions = {
              importer: styleVariablesImporter({
                stylesPath: path.resolve(__dirname),
                libPath: (lib) => {
                  return path.resolve(__dirname, '../src', lib, 'src');
                },
              }),
            };
          }
        }
        return ruleUse;
      });
    }
    return rule;
  };
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf) {
      rule.oneOf = rule.oneOf.map(mapRule);
    }
    return rule;
  });
};

const getAliasObject = (inputDir) => {
  const result = {};
  const dirPath = path.join(__dirname, inputDir);
  fs.readdirSync(dirPath, {withFileTypes: true}).forEach((item) => {
    if (!item.isDirectory()) {
      return;
    }
    const lib = item.name;
    const modulePath = path.resolve(__dirname, `${inputDir}/${lib}/src/`);
    if (fs.existsSync(modulePath)) {
      result[`@cb-general/${lib}`] = modulePath;
    }
  });

  return result;
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
      ...getAliasObject('../src'),
    };
    importStyleVariables(config);
    return config;
  },
};
