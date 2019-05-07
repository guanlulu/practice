#/bin/bash
# apt-get 包管理器
# sudo apt-get install openjdk-8-jdk -y
# -y 直接下载，不需要确认
# wget是一个下载文件的工具
# 支持断点下载功能，同时支持FTP和HTTP下载方式，支持代理服务器和设置起来方便简单
# sed 流编辑器 
# sed替换的基本语法 sed 's/原字符串/替换字符串/'
# ln -s 源文件 目标文件  它的功能是为某一个文件或目录在另外一个位置建立一个同步的链接
# xz -d **.tar.xz
# tar -xv -f **.tar
# npm install --unsafe-perm=true --allow-root --production -f 后面还可以写镜像
# --unsafe-perm=true 使用root用户安装
# $()：这个小括号里放的是命令，和``反引号作用一样，执行这个命令
# ${}：这里面放的是变量，用来引用的
# ${#sqlite3_bin}  #字符串长度
# cut -d ' ' -f 1`  
# -d ' '  以空格截取  
# -d ':' 以:截取
# -f 表示需要取得哪个字段
# -f 1 只取第一个字段
# ${sqlite_version:0:1} 截取 0 到 1
# head -1 显示前1行


# sqlite3_bin=`which sqlite3`
# echo ${#sqlite3_bin} 
# sqlite_version=`sqlite3 --version | cut -d ' ' -f 1`
# echo ${sqlite_version:0:1}
# java_version=`java -version 2>&1 | head -1 | cut -d '"' -f 2`
# echo ${java_version}
# grep 过略出 node = asaa
curl -s "http://10.0.0.102:9200/_cat/shards" | grep asas