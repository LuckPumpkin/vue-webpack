/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-02-26 10:31:56
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-02-26 19:39:26
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 删除无用文件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html入口文件

module.exports = {
  // mode: 'development',
  // entry:  path.resolve(__dirname, 'src/main.js'),
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/bundle[hash:8].js',
    publicPath:'./'
  },
  // Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径，所以当你在 /d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2 。
  // resolve / join
  // join: path.join([path1][, path2][, ...]) 连接任意多个路径字符串，同时对路径进行规范化
  // join: path.resolve([from ...], to)   将多个路径解析为一个规范的绝对路径
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader','css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512000,
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ],
    
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, '../index.html')
      // template: 'index.html'
    })
  ],
  devServer: {
    port: 3004,
    open: true
  }
}