#### like 

```
SELECT field1, field2,...fieldN FROM table_name WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
```

在 where like 的条件查询中，SQL 提供了四种匹配方式

* `%`: 表示任意 0 个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示

* `_`: 表示任意单个字符,`eg: '_a' 匹配两位且已 a 结尾的 `

* `[]`: 表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个
* `[^]`: 表示不在括号所列之内的单个字符
* 查询内容包含通配符时,由于通配符的缘故，导致我们查询特殊字符 “%”、“_”、“[” 的语句无法正常实现，而把特殊字符用 “[ ]” 括起便可正常查询

#### union 操作符

```
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];

// DISTINCT: 可选，删除结果集中重复的数据。默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响
// ALL: 可选，返回所有结果集，包含重复数据

// eg:
SELECT country FROM Websites
UNION
SELECT country FROM apps
ORDER BY country

// eg:
SELECT country, name FROM Websites
WHERE country='CN'
UNION ALL
SELECT country, app_name FROM apps
WHERE country='CN'
ORDER BY country;
```

#### order 排序

```
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
ORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]

// eg:
SELECT * from runoob_tbl ORDER BY submission_date ASC;(默认 ASC)
SELECT * from runoob_tbl ORDER BY submission_date DESC;
```

##### **MySQL 拼音排序**

```
// 如果字符集采用的是 gbk(汉字编码字符集)，直接在查询语句后边添加 ORDER BY
SELECT * FROM runoob_tbl ORDER BY runoob_title;
// 如果字符集采用的是 utf8(万国码)，需要先对字段进行转码然后排序
SELECT * FROM runoob_tbl ORDER BY CONVERT(runoob_title using gbk);
```

#### Group By 

GROUP BY 语句根据一个或多个列对结果集进行分组。在分组的列上我们可以使用 COUNT, SUM, AVG,等函数

```
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;

// eg:
SELECT name, COUNT(*) FROM   employee_tbl GROUP BY name;
```

##### WITH ROLLUP

实现在分组统计数据基础上再进行相同的统计（SUM,AVG,COUNT…）

```
// eg:
SELECT name, SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
```

使用 coalesce 来设置一个可以取代 NUll 的名称，coalesce 语法

```
// 如果a==null,则选择b；如果b==null,则选择c；如果a!=null,则选择a；如果a b c 都为null ，则返回为null（没意义）
select coalesce(a,b,c);
// eg:
SELECT coalesce(name, '总数'), SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
```

##### INNER JOIN

联合多表查询

* **INNER JOIN（内连接,或等值连接）**：获取两个表中字段匹配关系的记录
* **LEFT JOIN（左连接）：**获取左表所有记录，即使右表没有对应匹配的记录
* **RIGHT JOIN（右连接）：** 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录

```
// 取交集
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author;
```

##### NULL 值处理

* **IS NULL:** 当列的值是 NULL,此运算符返回 true

* **IS NOT NULL:** 当列的值不为 NULL, 运算符返回 true

* **<=>:** 比较操作符（不同于=运算符），当比较的的两个值为 NULL 时返回 true

  ```
  select * , columnName1+ifnull(columnName2,0) from tableName;
  // columnName1，columnName2 为 int 型，当 columnName2 中，有值为 null 时，columnName1+columnName2=null， ifnull(columnName2,0) 把 columnName2 中 null 值转为 0
  // ifnull 函数
  ```

##### 事务

MySQL 事务主要用于处理操作量大，复杂度高的数据

* 在 MySQL 中只有使用了 Innodb 数据库引擎的数据库或表才支持事务

  ```
  CREATE TABLE runoob_transaction_test( id int(5)) engine=innodb;
  ```

* 事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行

* 事务用来管理 insert,update,delete 语句

一般来说，事务是必须满足4个条件（ACID）：：原子性（**A**tomicity，或称不可分割性）、一致性（**C**onsistency）、隔离性（**I**solation，又称独立性）、持久性（**D**urability)

*在 MySQL 命令行的默认设置下，事务都是自动提交的，即执行 SQL 语句后就会马上执行 COMMIT 操作。因此要显式地开启一个事务务须使用命令 BEGIN 或 START TRANSACTION，或者执行命令 SET AUTOCOMMIT=0，用来禁止使用当前会话的自动提交*

##### 事务控制语句

* BEGIN 或 START TRANSACTION 显式地开启一个事务
* COMMIT 会提交事务，并使已对数据库进行的所有修改成为永久性的
* ROLLBACK 回滚会结束用户的事务，并撤销正在进行的所有未提交的修改
* ...

##### 事务处理主要有两种方法

1、用 BEGIN, ROLLBACK, COMMIT来实现

- **BEGIN** 开始一个事务
- **ROLLBACK** 事务回滚
- **COMMIT** 事务确认

2、直接用 SET 来改变 MySQL 的自动提交模式:

- **SET AUTOCOMMIT=0** 禁止自动提交
- **SET AUTOCOMMIT=1** 开启自动提交

##### ALTER 命令

修改数据表名或者修改数据表字段时，就需要使用到MySQL ALTER命令

```
ALTER TABLE testalter_tbl  DROP i;
ALTER TABLE testalter_tbl ADD i INT;

ALTER TABLE testalter_tbl DROP i;
ALTER TABLE testalter_tbl ADD i INT FIRST;
ALTER TABLE testalter_tbl DROP i;
ALTER TABLE testalter_tbl ADD i INT AFTER c;

ALTER TABLE testalter_tbl MODIFY c CHAR(10);
ALTER TABLE testalter_tbl CHANGE i j BIGINT;
ALTER TABLE testalter_tbl MODIFY j BIGINT NOT NULL DEFAULT 100;
// 修改字段默认值
ALTER TABLE testalter_tbl ALTER i SET DEFAULT 1000;
ALTER TABLE testalter_tbl ALTER i DROP DEFAULT;
// 修改表名
ALTER TABLE testalter_tbl RENAME TO alter_tbl;
// 修改存储引擎
ALTER TABLE tableName engine=myisam;
// 删除外键约束：keyName是外键别名
ALTER TABLE tableName drop foreign key keyName;
// 修改相对位置 
// name1为想要修改的字段，type1为该字段原来类型
ALTER TABLE tableName modify name1 type1 first|after name2;
```

##### 临时表

MySQL 临时表在我们需要保存一些临时数据时是非常有用的。临时表只在当前连接可见，当关闭连接时，Mysql会自动删除表并释放所有空间 

```
CREATE TEMPORARY TABLE SalesSummary (...)
```

##### 复制表

```
// 1 获取数据表的完整结构
SHOW CREATE TABLE table_name \G;
------------------------ result -----------------------
       Table: runoob_tbl
Create Table: CREATE TABLE `runoob_tbl` (
  `runoob_id` int(11) NOT NULL auto_increment,
  `runoob_title` varchar(100) NOT NULL default '',
  `runoob_author` varchar(40) NOT NULL default '',
  `submission_date` date default NULL,
  PRIMARY KEY  (`runoob_id`),
  UNIQUE KEY `AUTHOR_INDEX` (`runoob_author`)
) ENGINE=InnoDB 
1 row in set (0.00 sec)

// 2 修改SQL语句的数据表名，并执行SQL语句
CREATE TABLE `clone_tbl` (
  -> `runoob_id` int(11) NOT NULL auto_increment,
  -> `runoob_title` varchar(100) NOT NULL default '',
  -> `runoob_author` varchar(40) NOT NULL default '',
  -> `submission_date` date default NULL,
  -> PRIMARY KEY  (`runoob_id`),
  -> UNIQUE KEY `AUTHOR_INDEX` (`runoob_author`)
-> ) ENGINE=InnoDB;
```

另一种完整复制表的方法

```
CREATE TABLE targetTable LIKE sourceTable;
INSERT INTO targetTable SELECT * FROM sourceTable;
```

可以拷贝一个表中其中的一些字段:

```
CREATE TABLE newadmin AS
(
    SELECT username, password FROM admin
)
```

可以将新建的表的字段改名:

```
CREATE TABLE newadmin AS
(  
    SELECT id, username AS uname, password AS pass FROM admin
)
```

可以拷贝一部分数据:

```
CREATE TABLE newadmin AS
(
    SELECT * FROM admin WHERE LEFT(username,1) = 's'
)
```

可以在创建表的同时定义表中的字段信息:

```
CREATE TABLE newadmin
(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
)
AS
(
    SELECT * FROM admin
)
```

**区分下mysql复制表的两种方式**

```
// 只复制表结构到新表
create table 新表 like 旧表  
OR
create table 新表 select * from 旧表 where 1=2

// 复制表结构及数据到新表
create table新表 select * from 旧表
```

