const Sequelize = require('sequelize')
const path = require('path')
// Sequelize会在初始化时设置一个连接池，这样你应该为每个数据库创建一个实例
// var sequelize = new Sequelize(database, [username=null], [password=null], [options={}])
// 可以通过其返回的sequelize实例定义Model、执行query查询、执行transaction
console.log(path.resolve('./dbs/01.db')) // /Users/guanlulu/Desktop/cutkeywords/dbs/01.db
console.log(path.join(__dirname,'dbs','01.db')) // /Users/guanlulu/Desktop/cutkeywords/Sequelize/dbs/01.db

async function createModel() {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        operatorsAliases: false,
        // logging: false, //关闭打印输出
        // 仅限 SQLite
        storage:path.join(__dirname,'dbs','01.db')
    })
    
    // model定义格式为sequelize.define('name', {attributes}, {options})
    var User = sequelize.define('user', 
        {
            firstName: {
                type: Sequelize.STRING,
                field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
            },
            lastName: {
                type: Sequelize.STRING
            }
        }, 
        {
            //使用自定义表名
            freezeTableName: 'user',
            //去掉默认的添加时间和更新时间
            timestamps: false
        }
    )
    var res = await sequelize.sync()
    return res.models
}
// createModel()  是个promise

module.exports = {createModel}