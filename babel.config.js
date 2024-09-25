/** @type {import('@babel/core').TransformOptions['plugins']} */
const plugins = [
  "@tamagui/babel-plugin",
  {
    components: ["tamagui"],
    config: "./src/theme/tamagui.config.ts",
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === "development",
  },
];

/** @type {import('@babel/core').TransformOptions} */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins,
  };
};
