module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ..other plugins if any
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
