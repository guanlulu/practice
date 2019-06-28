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

var usr = {
    name: 'dassfdsfd',
    age: 23
}

// connection.query('insert into people set ?',usr,function(error, results) {
//     if (error) throw error;
//     console.log('inserted dassfdsfd');
//     console.log(results);
//     console.log('\n');
// })

// connection.query('SELECT * FROM people', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The name is: ', results[0].name);
// }); 

// connection.query('update people set age=45 where name = "dassfdsfd"',function(err,res) {
//     if(err) throw err
//     console.log('update people')
//     console.log(res)
//     console.log('\n')
// })

connection.query('select * from people',function(err,res) {
    if(err) throw err
    for(var i = 0;i < res.length;i++) {
        console.log(`${res[i].name}_${res[i].age}`)
    }
})

// connection.query('delete from people where name = "dassfdsfd"',function(err,res) {
//     if(err) throw err 
//     console.log(res)
// })

connection.end()