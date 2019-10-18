const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {}, // 配置解析，配置别名，extensions 自动解析确定的扩展
    devServer: {}, // 开发服务器 run dev/start 的配置，如端口，proxy
    module: { // 模块配置，配置loader(处理非js 文件)
        /**
         * test: 匹配特定条件，一般是提供一个正则表达式或者正则表达式的数组
         * include: 匹配特定条件，一般是提供一个字符串或者字符串数组
         * exclude: 排除特定条件
         * and: 必须匹配数组中所有条件
         * or: 匹配数组中任何一个条件
         * nor: 必须排除这个条件
        */
       rules: [
           {
               test: /\.m?js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader'
               }
           },
           {
               test: /\.css$/,
               include: [path.resolve(__dirname,'src')],
            //    use: ['style-loader','css-loader']
               use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    }
               ]

           },
           {
                test: /\.less$/,
                include: [path.resolve(__dirname,'src')],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'less-loader'
                ]

            },
            {
                test: /\.(gif|jpg|gif)$/,
                use: [
                    {
                        // url-loader 把图片编码成 base64 格式写进页面，从而减少服务器请求
                        loader: 'url-loader',
                        options: {
                            outputPath: 'images/', // 输出到images文件夹
                            limit: 60 * 1024 // 小于500B的文件打包成base64
                        }
                    }
                ]
            }
       ]
    }, 
    plugins: [ // 插件的配置：打包优化，资源管理和注入环境变量
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: './public/index.html', // 配置要被编译的 html 文件
            hash: true,
            // 压缩 production 模式使用
            minify: {
                removeAttributeQuotes: true, // 删除双引号
                collapseWhitespace: true, // 折叠 html 为一行
            }
        }),
        // 把 css 单独分离出来
        // 未分离之前打包到 js 里
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // 打包前清理 dist 目录
        new CleanWebpackPlugin(['dist'])
    ] 
}