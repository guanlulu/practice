var mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",  //主机地址
    user: "root", //数据库用户名
    password: "123456", //数据库用户密码
    database: "test"  //数据库名
})

connection.connect();   //数据库连接

function query(sql,callback){
    connection.query(sql, function (err,rows) {
        callback(err,rows)
    })
}

exports.query = query;