const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './media/panel/main.ts',
  output: {
    path: path.resolve(__dirname, 'media', 'dist'),
    filename: 'main.js',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './media/panel/index.html',
      filename: 'index.html'
    })
  ],
  devtool: 'source-map',
  mode: 'development'
};