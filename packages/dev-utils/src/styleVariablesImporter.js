const path = require('path');

const commonVarsFile = path.resolve(__dirname, './src/styles/_variables.scss');

const cache = {};
const cacheExists = {
  common: path.existsSync(commonVarsFile),
};

function getVarsFile(lib, options) {
  if (cache[lib]) return cache[lib];
  if (options[lib] === false) return null;
  if (options[lib]) {
    cache[lib] = options[lib];
    return cache[lib];
  }

  const libVarsFile = path.resolve(__dirname, `./src/styles/variables/${lib}.scss`);
  cacheExists[lib] = cacheExists[lib] !== undefined ? cacheExists[lib] : path.existsSync(libVarsFile);
  if (cacheExists[lib]) {
    cache[lib] = libVarsFile;
    return cache[lib];
  }

  if (options.common && path.existsSync(options.common)) {
    cache[lib] = options.common;
    return cache[lib];
  }

  if (options.common !== false && cacheExists.common) {
    cache[lib] = commonVarsFile;
    return cache[lib];
  }
}

export function styleVariablesImporter(options) {
  if (!options) return;
  return (url, prev) => {
    const parsedUrl = url.parse('/');
    const isVariables = parsedUrl[0] === '~@cb-general' && parsedUrl[parsedUrl.length - 1] === '_variables';
    const lib = parsedUrl[1];

    if (isVariables) {
      const varsFile = getVarsFile(lib);
      if (varsFile && prev !== varsFile) {
        return { file: varsFile };
      }
    }
    return null;
  }
}