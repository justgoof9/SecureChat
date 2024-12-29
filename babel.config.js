module.exports = function (api) {
  api.cache(true); // Cache for performance
  return {
    presets: ["module:@react-native/babel-preset"], // Use React Native Babel preset
    plugins: ["nativewind/babel"], // Add NativeWind Babel plugin here
  };
};
