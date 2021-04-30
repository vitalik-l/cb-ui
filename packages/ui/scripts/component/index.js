const shell = require('shelljs');
const fs = require('fs');
const fse  = require('fs-extra');
const path = require('path');
const finder = require('findit')(path.resolve(__dirname, 'template'));

const [ lib, componentName, stylePrefix ] = process.argv.slice(2);

const srcDir = path.resolve('src', lib, 'src', componentName);

// create a new dir
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
  console.log(`created ${srcDir}`);
}

finder.on('file', function(file) {
  const fileParams = path.parse(file);
  const newFileName = fileParams.base.replace('ComponentName', componentName).replace('Prefix', stylePrefix || '');
  const srcFile = path.resolve(srcDir, newFileName);
  const fileData = fs.readFileSync(file, 'utf-8');
  const newFileData = fileData.replace(/ComponentName/g, componentName).replace(/Prefix/g, stylePrefix || '');
  fs.writeFileSync(srcFile, newFileData);
  console.log(`added ${srcFile}`);
});