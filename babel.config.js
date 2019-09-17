module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'packagejson',
        root: './',
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};