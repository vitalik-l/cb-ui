const path = require('path');
const fs = require('fs');

const cache = {};
const cacheExists = {};
const cacheContent = {};

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
  const { stylesPath, common, replace = false, libPath } = options;

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
      if (prev === url) {
        const libBasePath = typeof libPath === 'string'
          ? libPath
          : typeof libPath === 'function'
            ? libPath(lib, url)
            : path.resolve(__dirname, '..', lib);
        const file = path.resolve(url.replace(`~@cb-general/${lib}`, libBasePath));
        return { file };
      }

      const varsFile = getVarsFile(lib, options);
      if (varsFile && prev !== varsFile && prev !== url) {
        if (replace) {
          return { file: varsFile };
        }
        if (url === `~@cb-general/${lib}/importer/variables`) {
          return { file: varsFile };
        }
        const contents = cacheContent[lib] || [
          `@import "${url}";`,
          `@import "~@cb-general/${lib}/importer/variables"`,
        ].join('');

        if (!cacheContent[lib]) cacheContent[lib] = contents;

        return {
          contents,
        }
      }
    }
    return null;
  };
};
