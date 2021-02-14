module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
  ],
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    ['@babel/preset-typescript', {
      allExtensions: true,
      isTSX: true,
    }],
  ],
  ignore: process.env.NODE_ENV === 'release' ? [
    '**/*.story.tsx',
    '**/*.story.scss',
    '**/createStory.ts',
    '**/createStory.tsx'
  ] : [],
};