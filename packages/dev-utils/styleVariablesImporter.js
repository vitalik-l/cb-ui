const path = require('path');
const fs = require('fs');

const cache = {};
const cacheExists = {};

function getVarsFile(lib, options) {
  if (cache[lib]) return cache[lib];
  if (options[lib] === false) return null;
  if (options[lib]) {
    cache[lib] = options[lib];
    return cache[lib];
  }
  const libVarsFile = path.resolve(options.stylesPath, `variables/${lib}.scss`);
  cacheExists[lib] = cacheExists[lib] !== undefined ? cacheExists[lib] : fs.existsSync(libVarsFile);
  if (cacheExists[lib]) {
    cache[lib] = libVarsFile;
    return cache[lib];
  }

  if (options.common && fs.existsSync(options.common)) {
    cache[lib] = options.common;
    return cache[lib];
  }
  if (options.common !== false && cacheExists.common) {
    cache[lib] = commonVarsFile;
    return cache[lib];
  }
}

module.exports = function styleVariablesImporter(options = {}) {
  if (!options) return;
  const { stylesPath, common } = options;

  if (common === undefined) {
    const commonVarsFile = path.resolve(stylesPath, '_variables.scss');
    options.common = commonVarsFile;
    cacheExists.common = fs.existsSync(commonVarsFile);
  }

  return (url, prev) => {
    const parsedUrl = url.split('/');
    const isVariables =
      parsedUrl[0] === '~@cb-general' &&
      ['_variables', 'variables'].includes(parsedUrl[parsedUrl.length - 1]);
    const lib = parsedUrl[1];
    if (isVariables) {
      const varsFile = getVarsFile(lib, options);
      if (varsFile && prev !== varsFile) {
        return { file: varsFile };
      }
    }
    return null;
  };
};
