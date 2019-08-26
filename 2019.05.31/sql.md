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

