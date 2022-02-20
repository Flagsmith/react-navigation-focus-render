module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          common: './common',
          components: './app/components',
          navigators: './app/components/navigators',
          screens: './app/components/screens',
          styles: './app/styles',
        },
      },
    ],
  ],
};
