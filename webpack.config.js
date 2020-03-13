const path = require("path")

module.exports = {
  entry: "./src/index.ts",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget:'umd'
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"]
  }
}