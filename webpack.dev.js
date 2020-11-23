const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: '[name].js',
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
      use: ['style-loader', 'css-loader', 'sass-loader']
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
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchOptions: {
      aggregateTimeout: 1000,
      ignored: /node_modules/
    }
  },
  devtool: 'source-map'
};
