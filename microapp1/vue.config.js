const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.PORT;

module.exports = defineConfig({
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    hot: true,
    allowedHosts: "all",
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
