// 前端模块化Commonjs\AMD\CMD\import
// 模块化
// 讲一个复杂的系统分解为多个模块，方便编码，同事降低代码复杂性，降低代码耦合性，方便部署，提高效率
// 避免命名冲突，减少空间污染
// 更好的分离代码
// 方便按需加载
// 更高的复用性,更高的可维护性
/** 
 * 
 * Commonjs
 * 
 * */ 
// CommonJs将每个javaScript文件当作是一个模块， 其内部定义的变量函数等都属于这个模块，我们可以向外部暴露我们想要暴露的。
// 但是CommonJs必须在node环境下才能使用，它是为node而生的，只有使用node环境才能运行，而浏览器是不支持CommonJs的，必须使用一些转换工具，将我们服务器端的CommonJs语法转化为浏览器识别的语法
// 在CommonJs中，每一个javaScript文件都会隐士的被包裹在一个立即函数里面，例如下面的例子
var name = 'xxx'
module.exports = {
    name: name
}
// 最终会被转换成下面这个样子
(function(exports, require, module, __filename, __dirname){
    var name = 'xxx'
    module.export = {
        name: name
    }
})()
// exports和module.exports其实是一个东西，只不过需要注意使用exports不能改变它的指向。_________？？？
// require是用来引入我们需要的外部模块的，他是同步加载的，适用于服务器端。
// __filename和__dirname分别是当前执行的文件路径和文件夹路径
// 一般我们可以直接使用node 文件名直接将文件置于node环境运行，这样是完全ok的。
// 但是倘若我们需要将它放到浏览器端运行，也就是引入到html文件中
//由于浏览器是不认识前面我们说的exports、require...这些语法的，会报错 require is not defined
/** 
 * 
 * AMD
 * 
*/
// CommonJs 为服务端而生，采用的同步加载方式，因此不适用浏览器________？？？
// 因为
// 浏览器需要到服务器加载文件，请求时间远大于本机读取的时间，如果文件较多，网络迟缓就会导致页面瘫痪，所以浏览器更需要能够异步加载的方式
// AMD 规范则是异步加载模块，允许指定毁掉函数
// 等模块异步加载完成够即可调用毁掉函数
// 依赖一个 require.js
// AMD 核心思想就是通过 define 来定义一个模块，然后使用 require 来加载一个模块
// define 基本使用
define(moduleId,['module1','module2'],function(m1,m2){
    // ...
})
// moduleId 为当前定义的模块ID，如果不写默认是当前文件名
// module1等是我们要引入的模块的ID
//func的参数就是导入的模块例如m1就是module1导入的变量，之后我们使用m1就行
// 需要注意的是如果我们要像module.exports一样向外暴露变量等，我们需要在每个模块的func中返回我们需要暴露的东西
// m1.js
define(function() {
    return {
      name: 'xxx'
    }  
  });
// m2.js
define(function() {
    return {
        age: '100'
    }  
});
  // main.js
  require.config({
    path: {
      m1: './m1.js',
      m2: './m2.js'
    }
  })
  require(['m1', 'm2'], function (m1, m2) {
    console.log(m1.name, m2.age)
  })
// index.html
{/* <script src="./node_modules/require.js" data-main="./node_modules/main.js"></script>   */}
/** 
 * 
 * CMD
*/
// CMD异步加载，跟AMD的主要区别在于，AMD依赖前置，提前加载依赖。而CMD就近加载，按需加载
define(function(require,exports,module) {
    module.exports = {}
})
// require 分为同步和异步
var modules = require('xxx')
var module = require.async('m1',function(m1) {

})