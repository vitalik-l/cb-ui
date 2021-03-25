"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const fs = require('fs');
let strings;
let stopParse = false;
let langFilePath;
let needWrite = false;

const logPrefix = '[babel-plugin-translation]';

function get(value, path, defaultValue) {
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


function warn(text) {
  console.log('\x1b[33m%s\x1b[0m', `
${logPrefix}: ${text}
`);
}
function error(text) {
  console.log('\x1b[31m%s\x1b[0m', `
${logPrefix}: ${text}
`);
}
function success(text) {
  console.log('\x1b[32m%s\x1b[0m', `
${logPrefix}: ${text}
`);
}

exports.default = function({ types: t }) {
  function getDefaultStringValue(string) {
    if (t.isTemplateLiteral(string)) {
      const quasis = string.quasis;
      if (quasis.length === 1) {
        return quasis[0].value.cooked;
      }
    }
    return string.value;
  }

  return {
    visitor: {
      CallExpression(path, state) {
        if (stopParse) return;
        const options = state.opts;
        const fnNames = options.fnNames || ['t', 'toTrans', 'trans'];
        const node = path.node;
        const stringArg = node.arguments[0];
        const defaultString = node.arguments[1];
        if (!langFilePath) {
          langFilePath = options.langFilePath;
        }
        if (!!~fnNames.indexOf(node.callee.name) && stringArg && t.isStringLiteral(stringArg) && stringArg.value) {
          if (!needWrite) {
            try {
              const raw = fs.readFileSync(langFilePath);
              strings = JSON.parse(raw);
            } catch (err) {
              if (!strings) {
                strings = {};
              }
            }
          }
          const value = stringArg.value;
          const stringValue = get(strings, value);
          const isTemplate =  t.isTemplateLiteral(defaultString);
          const hasDefaultString = t.isStringLiteral(defaultString) || isTemplate;
          const defaultStringValue = hasDefaultString ? getDefaultStringValue(defaultString) : undefined;
          const needToChange = defaultStringValue ? stringValue !== defaultStringValue : !stringValue;
          if (needToChange) {
            strings[value] = defaultStringValue || value;
            needWrite = true;
          }
        }
      },
      Program: {
        exit() {
          if (stopParse || !needWrite) return;
          success(`write lang strings to file ${langFilePath}`);
          fs.writeFileSync(langFilePath, JSON.stringify(strings, null, 2));
          needWrite = false;
        }
      }
    }
  };
}