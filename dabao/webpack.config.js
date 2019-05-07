const HtmlWebPackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

const getEntry = require('./glob.js')
const htmls = getEntry('**/*.html')
var entries = {};  // 入口文件
var HtmlPlugin = [];  // html 编译文件
for (var key in htmls) {
    entries[key] = htmls[key].replace(/index1.html|index2.html/, '02.js')
    HtmlPlugin.push(new HtmlWebPackPlugin({
      filename: path.basename(htmls[key]), 
      template: htmls[key]
    }))
}
console.log(entries)
module.exports = {
    mode: 'production',
    // entry: './01/02.js',
    entry: entries,
    // entry: {
    //     "01": "./01/02.js",
    //     "02": "./02/02.js"
    // },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        // publicPath: 'https://cdn.xxxx.com/' // 打包出来index.html引入的src是 https://cdn.xxxx.com/main.js
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader'
    //             }
    //         },
    //         {
    //             test: /\.html$/,
    //             use: [
    //                 {
    //                     loader: 'html-loader'
    //                     // options: { minimize: true }
    //                 }
    //             ]
    //         }
    //     ]
    // },
    plugins: HtmlPlugin,
    // devServer: {
    //     contentBase: path.join(__dirname,'./01/dist'),
    //     compress: true,
    //     port: 8000
    // },
    // devtool: 'source-map'
}
