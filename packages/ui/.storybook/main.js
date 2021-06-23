const path = require('path');
const fs = require('fs');
const styleVariablesImporter = require('@cb-general/dev-utils/styleVariablesImporter');

const libs = [];
const srcPath = path.join(__dirname, '../src');
fs.readdirSync(srcPath, { withFileTypes: true }).forEach((item) => {
  if (!item.isDirectory()) {
    return;
  }
  libs.push(item.name);
});

const stories = [];
const packagesNameArg = process.argv[process.argv.length - 1];
const packages = (packagesNameArg && packagesNameArg.split(' ')) || [''];
packages.forEach((p) => {
  const template = `../src/${p ? p + '/' : ''}**/*.story.@(js|jsx|ts|tsx|mdx)`;
  (!!~libs.indexOf(p) || !p) && stories.push(template);
});

const importStyleVariables = (config) => {
  const mapRule = (rule) => {
    if (rule.use) {
      rule.use = rule.use.map((ruleUse) => {
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
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      rule.oneOf = rule.oneOf.map(mapRule);
    }
    return rule;
  });
};

const getAliasObject = () => {
  return libs.reduce((prev, lib) => {
    prev[`@cb-general/${lib}`] = path.resolve(__dirname, `../src/${lib}/src/`);
    return prev;
  }, {});
};

const tsconfig =
  packages.length === 1
    ? path.resolve(__dirname, '../src', packages[0], 'tsconfig.json')
    : path.resolve(__dirname, '../tsconfig.packages.json');

module.exports = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    check: false, // disable typescript
    checkOptions: {
      tsconfig,
      // reportFiles: packages.map(packageName => `./src/${packageName ? packageName + '/' : ''}**/*.{ts|tsx}`),
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      propFilter: (prop) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
            return !declaration.fileName.includes('node_modules');
          });

          return Boolean(hasPropAdditionalDescription);
        }
        return true;
      },
      compilerOptions: {
        jsx: 4,
        module: 99,
        target: 1,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        moduleResolution: 2,
        paths: {
          '@cb-general/core/*': ['./core/src/*'],
          '@cb-general/icons/*': ['./icons/src/*'],
          '@cb-general/weekend/*': ['./weekend/src/*'],
        },
        pathsBasePath: path.resolve(__dirname, `../src`),
      },
    },
  },
  webpackFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...getAliasObject(),
    };
    importStyleVariables(config);
    return config;
  },
};
