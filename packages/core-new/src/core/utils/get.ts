export const get = (value: any, path: string, defaultValue: any) => {
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
};

