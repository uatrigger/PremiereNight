module.exports = {
  // , 'module:metro-react-native-babel-preset'
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@features': './src/features',
          '@shared': './src/shared',
          '@services': './src/services',
          '@config': './src/config',
          '@storage': './src/storage',
          '@types': './src/types',
        },
      },
    ],
  ],
};
