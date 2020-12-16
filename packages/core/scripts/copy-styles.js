import path from 'path';
import fse from 'fs-extra';

const SRC_DIR = './src';
const finder = require('findit')(SRC_DIR);

finder.on('file', function (file, stat) {
  const fileParams = path.parse(file);
  const { dir, ext } = fileParams;
  if (ext === '.scss') {
    const isStoryStyle = dir.indexOf('\\story') !== -1;
    if (!isStoryStyle) {
      console.log(file, fileParams);
      const buildPath = dir.replace('src', 'lib');
      fse.copy(dir, buildPath)
          .then(() => console.log(`Copied ${dir} to ${buildPath}`))
          .catch(err => console.error(err));
    }
  }
});
