const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');
const { head } = require('lodash');

module.exports = {
  entry: {
<<<<<<< Updated upstream
    account:'./src/views/account/account.js',
    home:'./src/views/home/home.js',
    menu:'./src/views/menu/menu.js',
    more:'./src/views/more/more.js',
    store:'./src/views/store/store.js',
    test:'./src/views/test/test.js',
    reg:'./src/views/reg/reg.js',
    common: './src/index.js',
=======
    home: './src/views/home/home.js',
    menu: './src/views/menu/menu.js',
    more: './src/views/more/more.js',
    store: './src/views/store/store.js',
    account: './src/views/account/account.js',
    common: './src/index.js',
    reg:'./src/views/reg/reg.js'
>>>>>>> Stashed changes
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash:8].js',
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff | eot | ttf | otf | svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
  },
  devServer: {
<<<<<<< Updated upstream
=======
    // index: path.resolve(__dirname, 'home.html'),
>>>>>>> Stashed changes
    open: ['/home.html'],
    // 配置前端请求代理
    proxy: {
      '^/api': {
        target: 'https://www.starbucks.com.cn/',
      },
      '^/bff': {
        target: 'https://bff.starbucks.com.cn/',
        pathRewrite: { '/api1': '' },
      },
    },
    client: {
      overlay: false,
    },
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
<<<<<<< Updated upstream
      template:'./src/views/account/account.html',
      inject:'head',
=======
      inject: 'head',
      template: './src/views/home/home.html',
      filename: 'home.html',
      chunks: ['common', 'home'],
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/views/account/account.html',
      filename: 'account.html',
>>>>>>> Stashed changes
      chunks: ['common', 'account'],
      filename:'account.html'
    }),
    new HtmlWebpackPlugin({
<<<<<<< Updated upstream
      template:'./src/views/home/home.html',
      inject:'head',
      chunks: ['common', 'home'],
      filename:'home.html'
    }),
    new HtmlWebpackPlugin({
      template:'./src/views/menu/menu.html',
      inject:'head',
=======
      inject: 'head',
      filename: 'menu.html',
      template: './src/views/menu/menu.html',
>>>>>>> Stashed changes
      chunks: ['common', 'menu'],
      filename:'menu.html'
    }),
    new HtmlWebpackPlugin({
<<<<<<< Updated upstream
      template:'./src/views/more/more.html',
      inject:'head',
=======
      inject: 'head',
      filename: 'more.html',
      template: './src/views/more/more.html',
>>>>>>> Stashed changes
      chunks: ['common', 'more'],
      filename:'more.html'
    }),
    new HtmlWebpackPlugin({
<<<<<<< Updated upstream
      template:'./src/views/store/store.html',
      inject:'head',
=======
      inject: 'head',
      filename: 'store.html',
      template: './src/views/store/store.html',
>>>>>>> Stashed changes
      chunks: ['common', 'store'],
      filename:'store.html'
    }),
    new HtmlWebpackPlugin({
      template:'./src/views/test/test.html',
      inject:'head',
      chunks: ['common', 'test'],
      filename:'test.html'
    }),
    new HtmlWebpackPlugin({
      template:'./src/views/reg/reg.html',
      inject:'head',
      chunks: ['common', 'reg'],
      filename:'reg.html'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'reg.html',
      template: './src/views/reg/reg.html',
      chunks: ['common', 'reg'],
    }),
  ],
};
