# 变量名和等号之间不能有空格
HOSTNAME='localhost'
USERNAME='root'
PASSWORD='123456'
DBNAME='test'
TABLENAME='user'

echo '\033[33m drop database \033[0m'
drop_db_sql="drop database test"
mysql -h ${HOSTNAME} -u ${USERNAME} -p${PASSWORD} -e "${drop_db_sql}"

echo '\033[33m create_db \033[0m'
create_db_sql="create database IF NOT EXISTS ${DBNAME}"
mysql -h ${HOSTNAME} -u ${USERNAME} -p${PASSWORD} -e "${create_db_sql}"

echo '\033[33m create_table \033[0m'
create_table_sql="create table IF NOT EXISTS ${TABLENAME} (id int auto_increment primary key, name varchar(40) charset utf8mb4 collate utf8mb4_unicode_ci, age int(11) ) charset=utf8mb4 collate=utf8mb4_unicode_ci"
mysql -h ${HOSTNAME} -u ${USERNAME} -p${PASSWORD}  -D ${DBNAME} -e "${create_table_sql}"

echo '\033[33m insert data 1 \033[0m'
insert_data1="insert into ${TABLENAME} (name,age) values ('lily',35)"
mysql -h ${HOSTNAME} -u ${USERNAME} -p${PASSWORD}  -D ${DBNAME} -e "${insert_data1}"

echo '\033[33m insert data 2 \033[0m'
insert_data2="insert into ${TABLENAME} (name,age) values ('Joe',12)"
mysql -h ${HOSTNAME} -u ${USERNAME} -p${PASSWORD}  -D ${DBNAME} -e "${insert_data2}"

