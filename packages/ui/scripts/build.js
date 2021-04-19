#!/usr/bin/env node
var shell = require('shelljs');
var publishUtils = require('./utils');
var path = require('path');

const [ packageName ] = process.argv.slice(2);

console.log('=> Building ' + packageName);
publishUtils.exec(
  `cross-env NODE_ENV=release babel ./src/${packageName} --out-dir ./lib/${packageName} --extensions ".js,.jsx,.ts,.tsx"`,
);
publishUtils.exec(`npx tsc -p ./src/${packageName}/ts.json`);
publishUtils.exec(`cross-env LIB=${packageName} babel-node ./scripts/copy-styles.js`);
publishUtils.exec(`cross-env LIB=${packageName} babel-node ./scripts/copy-files.js`);

console.log();
console.log('=> ' + packageName + ' build is done');
