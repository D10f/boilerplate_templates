const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: [ miniCSSExtractPlugin.loader, 'css-loader', 'sass-loader' ]
    },
    {
      test: /\.html$/,
      use: ['html-loader']
    },
    {
      test: /\.(svg|png|jpg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images"
        }
      }
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new miniCSSExtractPlugin({ filename: "[name].[hash].css"}),
    new CleanWebpackPlugin()
  ]
};
