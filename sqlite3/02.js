// 引入better-sqlite3
const Database = require('better-sqlite3');
// Creates a new database connection
const db = new Database('./users.db');
// 创建表 user
db.prepare('CREATE TABLE user(name text,age integer)').run()
// 插入数据
db.prepare('INSERT INTO user (name, age) VALUES (@name, @age)').run({name: 'Jackson',age: 18})
db.prepare('INSERT INTO user (name, age) VALUES (?,?)').run('nannan',6)
// 事物
const insert = db.prepare('INSERT INTO user (name, age) VALUES (@name, @age)');
// 批量插入
const insertMany = db.transaction((cats) => {
  for (const cat of cats) insert.run(cat);
});

insertMany([
  { name: 'Joey', age: 6 },
  { name: 'Sally', age: 4 },
  { name: 'Junior', age: 1 },
]);
// 返回单个
const stmt = db.prepare('SELECT age FROM user WHERE name = ?');
const user = stmt.get('nannan');
console.log(user.age); 
// 返回所有匹配到的 是一个数组
var statement = db.prepare('SELECT * FROM user WHERE age = ?')
var arr = statement.all(6)
console.log(arr) 