module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
  ],
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ],
  ignore: process.env.NODE_ENV === "release" ? [
    '**/story/'
  ] : [],
};