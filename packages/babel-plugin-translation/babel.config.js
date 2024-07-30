module.exports = {
  plugins: [
    '@babel/plugin-syntax-jsx',
    ['./better.js', {
      'localesPath': './src/locales'
    }],
    // ['./index.js', {
    //   'langFilePath': './src/locales/eng.json'
    // }]
  ],
};