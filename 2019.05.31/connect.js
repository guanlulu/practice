//connect.js
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",  //主机地址
    user: "root", //数据库用户名
    password: "123456", //数据库用户密码
    database: "lulu_project1",  //数据库名
    insecureAuth : true
});

connection.connect();   //数据库连接

connection.query('SELECT * FROM people', function (error, results, fields) {
  if (error) throw error;
  console.log('The name is: ', results[0].name);
}); 