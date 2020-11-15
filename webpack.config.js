const path = require("path");
const HtmlWebPluginPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPluginPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      utils$: path.resolve(__dirname, "src/utils"),
      vue: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".json", ".jsx", ".css", ".less"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    open: true,
    proxy: {
      "/api": {
        target: "https://v1.jinrishici.com/",
        pathRewrite: {
          "^/api": "",
        },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
