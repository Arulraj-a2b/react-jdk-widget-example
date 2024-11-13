const path = require("path");

module.exports = {
  mode: "production", // or 'development'
  entry: "./src/jsWidget.tsx", // Your entry point (make sure jsWidget.tsx exists)
  output: {
    filename: "my-widget.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyWidget", // Expose MyWidget globally
    libraryTarget: "umd", // Make the library accessible via different module systems
  },
  externals: {
    react: "React", // React as an external dependency
    "react-dom": "ReactDOM", // ReactDOM as an external dependency
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Ensure TypeScript extensions are handled
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle TypeScript files
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // Use ts-loader for TypeScript files
        },
      },
      {
        test: /\.(js|jsx)$/, // Handle JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
