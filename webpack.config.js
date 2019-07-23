const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: path.join(__dirname, "client", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client", "public"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
