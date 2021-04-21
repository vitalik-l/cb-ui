/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';
import fs from 'fs';

const files = [
  // 'README.md',
];

const LIB = process.env.LIB;

Promise.all(files.map((file) => copyFile(file))).then(() => createPackageFile());

function copyFile(file) {
  const buildPath = resolveBuildPath(file);
  return new Promise((resolve) => {
    fse.copy(file, buildPath, (err) => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../lib/', LIB, path.basename(file));
}

function createPackageFile() {
  return new Promise((resolve) => {
    const dir = path.resolve(__dirname, '../src', LIB);
    const packageFile = fs.existsSync(path.resolve(dir, 'package.json')) ? path.resolve(dir, 'package.json') : path.resolve(dir, 'lib.json');

    fse.readFile(packageFile, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then((data) => JSON.parse(data))
    .then((packageData) => {
      const {
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies = {},
      } = packageData;
      const { react, 'react-dom': reactDom, ...installDependencies } = dependencies;

      const minimalPackage = {
        name: `@cb-general/${LIB}`,
        author,
        version,
        description,
        main: './index.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies: installDependencies,
      };

      return new Promise((resolve) => {
        const buildPath = path.resolve(__dirname, '../lib', LIB, 'package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, (err) => {
          if (err) throw err;
          console.log(`Created package.json in ${buildPath}`);
          resolve();
        });
      });
    });
}
