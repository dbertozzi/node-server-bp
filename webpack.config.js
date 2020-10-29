const path = require("path");
const WebpackShellPlugin = require("webpack-shell-plugin");
require("dotenv").config();

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["npm run run:dev"],
    }),
  ],
  target: "node",
};
