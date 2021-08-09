const { merge } = require("webpack-merge");
const baseConfig = require("./base");
const path = require("path");

const projectRoot = process.cwd();

const devConfig = {
  mode: "development",
  devServer: {
    contentBase: path.join(projectRoot, "dist"),
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  devtool: "cheap-source-map"
}

module.exports = merge(baseConfig, devConfig);