#!/usr/bin/env node
var shell = require('shelljs');
var publishUtils = require('./utils');
var path = require('path');
const fs = require('fs');

const [ packageName ] = process.argv.slice(2);

console.log('=> Building ' + packageName);
const srcPath = fs.existsSync(`./src/${packageName}/src`) ? `./src/${packageName}/src` : `./src/${packageName}`;
console.log(`=> src path is ${srcPath}`);
publishUtils.exec(
  `cross-env NODE_ENV=release babel ${srcPath} --out-dir ./lib/${packageName} --extensions ".js,.jsx,.ts,.tsx"`,
);
console.log('=> Check for tsconfig');
const tsconfigFile = fs.existsSync(`./src/${packageName}/tsconfig-build.json`) ? `./src/${packageName}/tsconfig-build.json` : `./src/${packageName}/tsconfig.json`;
console.log(`=> tsconfig file is ${tsconfigFile}`);
publishUtils.exec(`npx tsc -p ${tsconfigFile} --outDir ./lib/${packageName}`);
publishUtils.exec(`cross-env LIB=${packageName} babel-node ./scripts/copy-styles.js`);
publishUtils.exec(`cross-env LIB=${packageName} babel-node ./scripts/copy-files.js`);

console.log();
console.log('=> ' + packageName + ' build is done');
