const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugn')

module.exports = {
    // 1. 入口 出口
    entry: {
        main: './src/index.js' // 指把 index.js 设为入口文件并且设置别名为 main 
    },
    output: {
        publicPath: '/', // 也可以不指定，默认是根目录
        filename: '[name].js', // 这里[name]为占位符，即变量，这里指复用入口文件的名字 main
        path: path.resolve(__dirname,'dist') // 输出文件路径，必须是绝对路径，因此引用node 的path 模块
    },

    // 2. 快速定位错误
    // Webpack打包后如果文件出错会把错误指向打包后的文件中的某一行
    // 而我们更需要知道是源文件哪一行出错，这时就需要配置source-map
    // 传了 mode 参数，命令行可以不用加 --mode development
    mode: 'development', // 表示是开发环境。js 文件不压缩，设为 production 生产环境，则会压缩
    devtool: 'cheap-module-eval-source-map', // 开发环境的最佳配置
    // devtool: 'cheap-module-source-map' // 生产环境的source-map的最佳配置

    // 3. 热更新
    devServer: {
        // 当前目录 ./
        // 本机目录 /
        contentBase: './', // 设置实时监听打包文件的目录
        open: true,
        port: 8081,
        hot: true, // 启动模块热更新
        hotOnly: true, // // 当模块热更新失败时浏览器也不自动刷新
        // proxy // 可以配置跨域
    },

    // 4. 识别打包 js 文件,编译 es6
    // 配置模块规则识别
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel-loader' // 但需要编译es6语法时需要引入babel
    //         }
    //     ]
    // }

    // 5. 识别打包图片、字体
    // 6. 识别打包css、scss文件

    // 7. 生成 html
    // 为了打包后自动生成html文件并引入打包的js文件
    // 需要安装另一个插件，npm i -D html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html' // 引用html模板，之后生成的html则会按照此模板生成并且自动引入打包后的js文件
        }),
        // 打包前最好能自动清除dist 目录，防止冗余文件
        // npm i -D clean-webpack-plugin
        new CleanWebpackPlugin(['dist'])
    ],

    // 8. resolve
    // resolve: {
    //     // 创建 import 或 require 的别名，来确保模块引入变得更简单
    //     alias: {},
    //     // 自动解析确定的扩展
    //     // eg: ['.js', '.vue', '.json']
    //     extensions: [] 
    // }
}