const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: path.resolve(__dirname, "./project/index.js"),
    article: path.resolve(__dirname, "./project/article.js"),
    addArticleHTML: path.resolve(__dirname, "./project/addArticlesHTML.js"),
    articlesService: path.resolve(__dirname, "./project/articlesService.js"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "production"),
    },
    port: 3000,
    open: true,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, "production"),
    filename: "[contenthash].js",
    clean: true,
    assetModuleFilename: "[name].[ext]"
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./project/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "article.html",
      template: "./project/article.html",
      chunks: ["article"],
    }),
  ],
};
