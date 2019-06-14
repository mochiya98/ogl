module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        debug: true,
        targets: ["> 1% in JP", "not IE 11"]
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import"]
};
