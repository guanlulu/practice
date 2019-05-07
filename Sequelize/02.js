// Sequelize基于Promise实现异步流程控制，但其使用的并不是ECMAScript 6中规定的标准Promise对象，
// 而是使用bluebird，这个模块是对原生Promise的一个扩展
// sequelize.models
// 该实例属性用于返回通过sequelize.define定义的所有模型对象

// sequelize.define
// Model相当于数据库中的表，该对象不能通过构造函数实例化
// 只能通过sequelize.define()或sequelize.import()方法创建
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    operatorsAliases: false,
    logging: false, //关闭打印输出
    // 仅限 SQLite
    storage: path.resolve('./dbs/02.db')
})
sequelize.define('modelName', {
    columnA: {
        type: Sequelize.BOOLEAN,
        validate: {
          is: ["[a-z]",'i'],        // will only allow letters
          max: 23,                  // only allow values <= 23
          isIn: {
            args: [['en', 'zh']],
            msg: "Must be English or Chinese"
          }
        },
        field: 'column_a'
        // Other attributes here
    },
    columnB: Sequelize.STRING,
    columnC: 'MY VERY OWN COLUMN TYPE'
})

// 对象
// 1. Sequelize - 顶级对象
// Sequelize是一个指向sequelize模块顶级对象引用，同时也是一个构造函数
// 2. Sequelize.Utils 工具库
// 如：可以使用Sequelize.Utils._属性，该属性是一个指向lodash库的引用
// 3. Sequelize.Promise
// 该属性是一个指向bluebirdPromise类型的引用
// 4. Sequelize.QueryTypes 查询类型枚举
// 用于sequelize.query的表示查询类型的枚举对象。可用类型如下：
module.exports = {
    SELECT: 'SELECT',
    INSERT: 'INSERT',
    UPDATE: 'UPDATE',
    BULKUPDATE: 'BULKUPDATE',
    BULKDELETE: 'BULKDELETE',
    DELETE: 'DELETE',
    UPSERT: 'UPSERT',
    VERSION: 'VERSION',
    SHOWTABLES: 'SHOWTABLES',
    SHOWINDEXES: 'SHOWINDEXES',
    DESCRIBE: 'DESCRIBE',
    RAW: 'RAW',
    FOREIGNKEYS: 'FOREIGNKEYS',
  };
  // 5. Sequelize.Validator
  // 一个指定validator.js对象的引用，该对象用于Sequelize内部的验证，如：非常、URL、IP等，也可以通过该属性进行一些自定义验证
  // 6. Sequelize.Transaction 事务对象
  // 7. Deferrable - 延时对象
  // and more...



  // sequelize.import(path) -> Model    - 模型导入
  // 通过文件导入模型定义。检查模型是否已经定义
  // 文件怎么写？
  // 被导入的模型会被缓存，所以多次导入并不会重复加载
  // sequelize.query(sql, [options={}]) -> Promise  执行查询
  // 执行原始SQL 语句进行查询
  // 默认情况下，返回值中有两个参数：一个包含结果的数组，一个元数据对象。可以通过.spread方法来查看结果。
  // 如果不想使用原始查询结果，可以第二个可选参数中传一个type参数，并指定查询的类型。设置后，sequelize会对结果进行格式化
