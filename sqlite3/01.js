const Database = require('better-sqlite3');
const db = new Database('./users.db');
/**
 * 1. new Database(path, [options])
 *  */
// Creates a new database connection
// If the database file does not exist, it is created
// This happens synchronously, which means you can start executing queries right away 同步的，可以马上查询

// options = {
//     "memory": false, // 打开内存数据库，而不是磁盘绑定数据库
//     "readonly": false, // 以只读模式打开数据库连接
//     "fileMustExist": false, // 如果数据库不存在，Error将抛出一个而不是创建一个新文件。此选项不会影响内存或只读数据库连接
//     "timeout": 5000 // 在抛出SQLITE_BUSY错误之前，在锁定的数据库上执行查询时等待的毫秒数（默认值:) 5000
// }


/**
 * 2 .exec（string）
 *  */
// 执行给定的SQL字符串
// 与预处理语句不同，它可以执行包含多个SQL语句的字符串
// This function performs worse and is less safe than using prepared statements
// You should only use this method when you need to execute SQL from an external source (usually a file) // 外部文件
// 如果发生错误，则执行停止，并且不执行进一步的语句。您必须手动回滚更改
// const migration = fs.readFileSync('migrate-schema.sql', 'utf8');
// db.exec(migration);
// table user already exists 表已经存在会报错
// db.exec(`create table user (name text, age integer);`) 
// 另一种写法
db.prepare('CREATE TABLE user(name text,age integer)').run()

/**
 * 3 .prepare(string)
 *  */
// 插入数据 1 对象
db.prepare('INSERT INTO user (name, age) VALUES (@name, @age)').run({name: 'Jackson',age: 18})
// 插入数据 2 值
db.prepare('INSERT INTO user (name, age) VALUES (?,?)').run('nannan',6)
// Creates a new prepared Statement from the given SQL string.
// Statement 表示单个SQL语句的对象 
// const stmt = db.prepare('SELECT name, age FROM user')

/**
 *  3 .transaction(function)
 *  */
// 创建一个始终在事务内运行的函数
// 调用该函数时，它将开始一个新事务
// 函数返回时，将提交事务 ___________???
// 如果抛出异常，则将回滚事务（并且异常将照常传播）
const insert = db.prepare('INSERT INTO user (name, age) VALUES (@name, @age)');

const insertMany = db.transaction((cats) => {
  for (const cat of cats) insert.run(cat);
});

insertMany([
  { name: 'Joey', age: 6 },
  { name: 'Sally', age: 4 },
  { name: 'Junior', age: 1 },
]);

/**
 * 4 .function(name, [options], function)
 *  */
// Registers a user-defined function so that it can be used by SQL statements
// 注册一个用户自定义函数，以便它可以在 sql 语句中使用
// 默认情况下，用户定义的函数具有严格数量的参数
// 您可以注册多个具有相同名称的函数，每个函数具有不同数量的参数，从而导致SQLite3执行不同的函数，具体取决于传递给它的参数数量
// 如果注册两个具有相同名称和相同数量的参数的函数，则第二个注册将删除第一个
db.function('add2', (a, b) => a + b);
var sum = db.prepare('SELECT add2(?, ?)').get(12, 4); // => 16
console.log(sum['add2(?, ?)']) 
var str = db.prepare('SELECT add2(?, ?)').get('foo', 'bar'); // => "foobar"
// str => { 'add2(?, ?)': 'foobar' }
console.log(str['add2(?, ?)']) 
// db.prepare('SELECT add2(?, ?, ?)').get(12, 4, 18); // => Error: wrong number of arguments

/**
 * 5 .close()
 *  */
// Closes the database connection. 
// After invoking this method, no statements can be created or executed.
// process.on('exit', () => db.close());

/**
 * 6. class Statement
 *  */
// An object representing a single SQL statement
// 6.1 .run([...bindParameters]) -> object
// 6.2 .get([...bindParameters]) -> row
const stmt = db.prepare('SELECT age FROM user WHERE name = ?');
const user = stmt.get('nannan');
// var statement = db.prepare('SELECT * FROM user WHERE age = ?')
// var user = statement.get(6) // { name: 'nannan', age: 6 }
console.log(user.age); // => 6
// 6.3 .all([...bindParameters]) -> array of rows
// 检索所有匹配的行
var statement = db.prepare('SELECT * FROM user WHERE age = ?')
var arr = statement.all(6)
console.log(arr) // [ { name: 'nannan', age: 6 }, { name: 'Joey', age: 6 } ]

/**
 * 7. 绑定参数
 *  */
    // 7.1 使用匿名参数
    // const stmt = db.prepare('INSERT INTO people VALUES (?, ?, ?)');

    // The following are equivalent.
    // stmt.run('John', 'Smith', 45);
    // stmt.run(['John', 'Smith', 45]);
    // stmt.run(['John'], ['Smith', 45]);
    // 7.2 使用命名参数
    // The following are equivalent.
    // const stmt = db.prepare('INSERT INTO people VALUES (@firstName, @lastName, @age)');
    // const stmt = db.prepare('INSERT INTO people VALUES (:firstName, :lastName, :age)');
    // const stmt = db.prepare('INSERT INTO people VALUES ($firstName, $lastName, $age)');
    // const stmt = db.prepare('INSERT INTO people VALUES (@firstName, :lastName, $age)');

    // stmt.run({
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     age: 45
    // });
