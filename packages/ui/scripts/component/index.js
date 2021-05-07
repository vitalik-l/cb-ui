const shell = require('shelljs');
const fs = require('fs');
const fse  = require('fs-extra');
const path = require('path');
const find = require('findit');
const inquirer = require('inquirer');

// const [ lib,  componentName, stylePrefix ] = process.argv.slice(2);
const [ libArg ] = process.argv.slice(2);

const [lib, ...componentPath] = libArg.split('/');

inquirer
  .prompt([{
    type: 'input',
    name: 'componentName',
    message: 'Write the component name:'
  }, {
    type: 'input',
    name: 'stylePrefix',
    message: 'Write the prefix to the styles or press Enter if you dont need it:'
  }])
  .then(answers => {
    const { componentName, stylePrefix } = answers;
    if (!componentName) return;

    const srcDir = path.resolve('src', lib, 'src', ...componentPath, componentName);

    // create a new dir
    if (!fs.existsSync(srcDir)) {
      fse.mkdirpSync(srcDir);
      console.log(`created ${srcDir}`);
    }
    const finder = find(path.resolve(__dirname, 'template'))
    finder.on('file', function(file) {
      const fileParams = path.parse(file);
      const newFileName = fileParams.base.replace('ComponentName', componentName).replace('Prefix', stylePrefix || '');
      const srcFile = path.resolve(srcDir, newFileName);
      const fileData = fs.readFileSync(file, 'utf-8');
      const newFileData = fileData
        .replace(/ComponentName/g, componentName)
        .replace(/Prefix/g, stylePrefix || '')
        .replace(/ComponentPath/g, componentPath.length ? componentPath.join('/') + '/' : '')
        .replace(/StoryPath/g, `../../${Array.from([...componentPath, ''], () => '').join('../')}story`);
      fs.writeFileSync(srcFile, newFileData);
      console.log(`added ${srcFile}`);
    });
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.error(error);
    }
  });