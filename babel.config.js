module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './src/theme/tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
    ],
  };
};
