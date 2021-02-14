const shell = require('shelljs');
const publishUtils = require('./utils');
const path = require('path');

const projectPath = process.env.PROJECT_PATH;
const [ packageName ] = process.argv.slice(2);
const libPath = path.resolve('lib', packageName);
const packageJson = require(path.resolve(libPath, 'package.json'));

try {
  console.log(`cd lib/${packageName}`);
  shell.cd(`lib/${packageName}`);
  publishUtils.exec('npm pack');
  console.log(`cd ${projectPath}`);
  shell.cd(projectPath);
  const tgzFileName = `${packageJson.name.replace('@', '').replace('/', '-')}-${packageJson.version}.tgz`;
  publishUtils.exec(
    `npm i ${path.resolve(
      __dirname,
      '..',
      'lib',
      packageName,
      tgzFileName,
    )}`,
  );
  shell.cd(__dirname);
} catch (err) {
  console.error(err);
}
