import React from 'react';

const get = (value, path, defaultValue) => {
  if (value[path]) return value[path];
  return String(path)
    .split('.')
    .reduce((acc, v) => {
      try {
        acc = acc[v] === undefined ? defaultValue : acc[v];
      } catch (e) {
        return defaultValue;
      }
      return acc;
    }, value);
}

const formatString = (str, obj) => {
  let resStr = str;
  Object.keys(obj).forEach((key) => {
    resStr = resStr.replace(`@${key}`, obj[key]);
  });
  return resStr;
};

export const useTranslation = (langStrings = {}) => {
  const t = React.useCallback((value, paramsOrDefaultString, paramsProp) => {
    let defaultString = value, params = paramsProp;
    if (typeof paramsOrDefaultString === 'string') {
      defaultString = paramsOrDefaultString;
    } else {
      params = paramsOrDefaultString;
    }
    const string = get(langStrings, value, defaultString);
    if (params) {
      return formatString(string, params);
    }
    return string;
  }, [langStrings]);

  return { t };
};

export const trans = (...args) => args[0];
export const toTrans = (...args) => args[0];