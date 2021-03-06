/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-02-26 10:31:56
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-10 20:32:53
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 删除无用文件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html入口文件
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// uglifyjs-webpack-plugin不支持es6 
// webpack-parallel-uglify-plugin  并行处理多个任务，每个子任务还是通过uglifyjs压缩 不支持老项目
const TerserWebpackPlugin = require('terser-webpack-plugin')  // 压缩js代码  //处理多个任务

module.exports = {
  mode: 'production',
  // entry:  path.resolve(__dirname, 'src/main.js'),
  entry: './src/main.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name]-[hash:8].js',
    // publicPath: '/'
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
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
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
          MiniCssExtractPlugin.loader,
          'css-loader'
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
        type: 'asset/inline',
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 1024,
        //       name: '[name].[ext]',
        //       outputPath: 'static/img/'
        //     }
        //   }
        // ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ],
    
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
      // template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer:[
      new TerserWebpackPlugin({
        terserOptions: {
          muCustomOption: true,
          parallel: true,
          format: false,
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
}