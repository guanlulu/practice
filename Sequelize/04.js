// 定义模型
// 定义模型model和表之间的映射关系使用define方法。
// 定义时Sequelize会自动为其添加createdAt和updatedAt两个属性（属性相当于表中的字段）
// 这样你就可以知道数据什么时候插入了数据库和什么时候进行了更新
var Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
})
  
var Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
})
// 定义模型时可以为列设置一些选项
var foo = sequlize.define('foo',{
    // 实例化时在没有显式设置属性值时，会自动设置为 true
    flag: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true 
    },
    // 日期默认值 => 当前时间
    mtDate: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.NOW
    },
    // 设置 allowNull 选项为 false 后，会为列添加 NOT NULL 非空限制
    // 这以为这当执行查询等操作时相关字段为空会从数据库抛出错误
    title: { type: Sequelize.STRING, allowNull: false},
    // 添加唯一 {unique} 约束后插入重复值会报错
    // unique 属性可以使 boolean 或者 string 类型
    // 如果为多个字段添加了相同的字符串那么将会是一个符合唯一键
    // 什么是符合唯一键  ？？?
    // unique属性以一个简单的简写方式创建唯一索引
    someUnique: {type: Sequelize.STRING, unique: true},
    uniqueOne: { type: Sequelize.STRING,  unique: 'compositeIndex'},
    uniqueTwo: { type: Sequelize.INTEGER, unique: 'compositeIndex'},
    // 不简写的方式
    // {someUnique: {type: Sequelize.STRING}},
    // {indexes: [{unique: true, fields: ['someUnique']}]}
    // 定义一个主键
    identifier: {type: Sequelize.STRING,primaryKey: true},
    // autoIncrement 选项用于创建一个自增的整型列
    incrementMe: { type: Sequelize.INTEGER, autoIncrement: true },
    // 可以通过 "field" 属性来指定数据库中的字段名
    fieldWithUnderscores: { type: Sequelize.STRING, field: "field_with_underscores" },
    // 通过references选项可以创建外键 ？？？？？
    bar_id: {
        type: Sequelize.INTEGER,
        references: {
            // 引用另一个模型
            model: Bar,
            // 链接模型的列表
            key: 'id',
            // 强制使用外键约束，仅适用于 PostgreSql
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

// Configuration - 配置
// 定义模型时，可以通过配置来设置列名等相关信息：
var Bar = sequelize.define('bar',{/* */},{
    // 不要添加时间戳属性
    timestamps: false,
    // 不从数据库删除数据，而只是增加一个 deleteAt 标识当前时间
    // paranoid 属性只在启用 timestamps 时适用
    paranoid: true,
    // 不适用驼峰式命名规则，这样会使用下划线分割
    // 这样 updateAt  的字段名会是 update_at
    underscored: true,
    // 禁止修改表名，默认情况下
    // sequelize 会自动使用传入的模型名 （define 的第一个参数）作为表名
    // 如果你不想使用这种方式你需要进行以下设置
    freezeTableName: true,
    // 定义表名
    tableName: 'my_very_custom_table_name'
})

// 如果你想sequelize处理时间戳，但只在个别情况下使用，那么你可以对使用的列单独重载：
var Foo = sequelize.define('foo',  { /* bla */ }, {
    // 不要忘了启用 timestamps
    timestamps: true,
  
    // 不想使用 createdAt
    createdAt: false,
  
    // 想 updatedAt 的实际名为 'updateTimestamp'
    updatedAt: 'updateTimestamp',
  
    // 要将 deletedAt 设置为 destroyTime (注意要启用paranoid)
    deletedAt: 'destroyTime',
    paranoid: true
  })

// import 模型导入
// 通过文件导入返回的对象与通过defined方法定义的模型完全一致，两者都是instance模型实例
// 自v1.5.0起，sequlize会对导入进行缓存，这样就不用担心多次对文件修改造成的一些问题
// 这个文件定义于 /path/to/models/project.js
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("project", {
      name: DataTypes.STRING,
      description: DataTypes.TEXT
    })
}
// 我们可以app.js或其它需要的地方引入定义的模型
var Project = sequelize.import(__dirname + "/path/to/models/project")
// import同样可以使用回调函数参数的使用方式
sequelize.import('project', function(sequelize, DataTypes) {
    return sequelize.define("project", {
      name: DataTypes.STRING,
      description: DataTypes.TEXT
    })
})




// Database synchronization - 数据库同步
// 什么是数据库结构 ？？？
// 开始一个新项目时，我们并没有数据库结构
// 使用Sequelize时，并不需要先定义好数据库结构。我们只要定义好模型，然后进行同步即可
// Sequelize支持创建表和删除表
// 通过 sync 方法同步数据结构
// 即,创建表
Project.sync()
Task.sync()
// 强制创建
// 通过设置 force 属性会首先删除表并重新创建
Project.sync({force: true})
// 删除表
Project.drop()
Task.drop()
// 事件处理
// 是个 Promise
// Project.drop().then(function() {}
Project.sync().then(function() {
    // 处理成功
}).catch(function(error) {
    // 出了点问题^~^
})
// .sync({ force: true })会删除并重建表，这时我们可以添加match选项，只**重建**正则表达式匹配的表
sequelize.sync({ force: true, match: /_test$/ });