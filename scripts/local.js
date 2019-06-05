const shell = require('shelljs');
const publishUtils = require('./utils');
const path = require('path');
const lnk = require('lnk');
const globby = require('globby');
const packageJson = require(path.resolve('./package.json'));

const projectPath = process.env.PROJECT_PATH;

try {
    console.log('cd lib');
    shell.cd('lib');
    publishUtils.exec('npm pack');
    console.log(`cd ${projectPath}`);
    shell.cd(projectPath);
    publishUtils.exec(`npm i ${path.resolve(__dirname, '..', 'lib', packageJson.name + '-' + packageJson.version + '.tgz')}`);
    shell.cd(__dirname);
} catch (err) {
    console.error(err);
}

// console.log('create node_modules symlink');
// lnk(path.resolve(projectPath, 'node_modules'), path.resolve(__dirname, '..', 'lib'), {force: true})
//     .then(() => console.log('done'))
//     .catch(err => console.log(err));


