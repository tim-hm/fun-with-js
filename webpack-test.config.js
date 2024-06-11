const path = require("path")
const glob = require("glob")

module.exports = {
  mode: "development",
  entry: glob.sync("spec/**/*.test.ts"),
  output: {
    filename: "test.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [__dirname, "spec", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "vm": require.resolve("vm-browserify"),
    },
  },
  plugins: [],
}
