const path = require("path");
const HtmlWebPluginPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  plugins: [
    new HtmlWebPluginPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
