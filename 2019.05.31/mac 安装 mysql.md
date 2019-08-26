## mac 安装 mysql 

###  1.  安装与启动

使用 brew info mysql 查询 mysql 的各项信息，如果还没安装，会提示`uninstall`，如果安装了，会显示安装目录，一般在 `/usr/local/bin/mysql`

如果已安装，此步骤略过
如果没安装，运行 `brew install mysql`来安装
安装完之后，运行  `sudo brew services start mysql`  启动 mysql
		必须加 `sudo`，不然报错：

​		`ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)`

### 2. 登陆

终端运行 `mysql -u root -p`，之后会让输入密码登陆，这个时候出现这样的错误：
`ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES),`

这是因为修改初始密码没有成功，解决方法：

 1. 终端输入 mysqld_safe --skip-grant-tables 显示如下

    ```
    mysqld_safe --skip-grant-tables
    
    # 显示如下
    2019-05-31T08:26:58.6NZ mysqld_safe Logging to '/usr/local/var/mysql/jiaguolindeiMac.local.err'.
    2019-05-31T08:26:58.6NZ mysqld_safe A mysqld process already exists
    ```

2. 再次输入 mysql -u root 显示如下

   ```
   mysql -u root
   
   # 显示如下
   Welcome to the MySQL monitor.  Commands end with ; or \g.
   Your MySQL connection id is 7
   Server version: 8.0.16 Homebrew
   
   Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.
   
   Oracle is a registered trademark of Oracle Corporation and/or its
   affiliates. Other names may be trademarks of their respective
   owners.
   
   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
   
   mysql>
   ```

3. 终端输入 use mysql显示如下

   ```
   mysql>  use mysql
   
   # 显示如下
   Reading table information for completion of table and column names
   You can turn off this feature to get a quicker startup with -A
   
   Database changed
   mysql>
   ```

4. 终端输入 FLUSH PRIVILEGES显示如下

   ```
   mysql> FLUSH PRIVILEGES;
   
   # 显示如下
   Query OK, 0 rows affected (0.04 sec)
   ```

   

5. 修改密码
   此处注意，`UPDATE mysql.user SET authentication_string=PASSWORD('你的密码') WHERE User='root';` 这句是**低版本**的修改密码语法，无论大小写都会报错：

   `ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '('qwerty') WHERE User='root'' at line 1`

   解决方法：

   可以看到我安装的是 `Server version: 8.0.16 Homebrew`，正确语法是：

   ```
   mysql> ALTER user 'root'@'localhost' IDENTIFIED BY '此处是你的新密码';
   
   # 显示如下
   Query OK, 0 rows affected (0.09 sec)
   ```

   **注意，这里的密码要用包含8位大写+小写+特殊字符+数字的密码**

6. 退出

   ```
   mysql>quit;
   ```

7. kill 掉mysql进程

   ```
   # 查看 mysql 进程
   ps -e|grep mysql
   
   # kill 掉所有 MySQL
   sudo killall mysqld 进程
   
   ```

8. 重启 mysql 

   ```
   brew services restart mysql
   ```

9. 再次登录

   ```
   mysql -u root -p
   Enter password:输入你的新密码
   # 登录成功
   ```
### 基本句法

    # 查看数据库 
    show databases;
    # 创建数据库
    CREATE DATABASE 数据库名;
    # 进入数据库
    use 数据库名;
    # 显示数据表
    show tables;
    # 创建数据表
    CREATE TABLE table_name (column_name column_type);
    # 插入数据
    INSERT INTO table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN );
    # 查询数据
    SELECT column_name,column_name FROM table_name [WHERE Clause] [LIMIT N] [ OFFSET M]
    # 更新数据
    UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]
    # 删除数据
    DELETE FROM table_name [WHERE Clause]
    # like
    SELECT field1, field2,...fieldN FROM table_name WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
    # 简单描述表结构，字段类型
    desc table_name;
    # 删除数据库
    drop database 数据库名;
### 使用 nodejs 连接 mysql

```
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",  //主机地址
    user: "root", //数据库用户名
    password: "****", //数据库用户密码
    database: "****",  //数据库名
    insecureAuth : true
});

connection.connect();   //数据库连接
```

报错：`Error: ER_NOT_SUPPORTED_AUTH_MODE:Client does not support authentication protocol requested by server; consider upgrading MySQL client`

解决方法：

```
mysql>use mysql;
mysql>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
mysql> FLUSH PRIVILEGES;
```

