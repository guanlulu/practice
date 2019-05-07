// fs 模块
const fs = require('fs')
// 所有的文件系统操作都有异步和同步两种形式
// 异步形式的最后一个参数都是完成时回调函数。 
// 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 
// 如果操作成功完成，则第一个参数会是 null 或 undefined
fs.unlink('/tmp/hello', (err) => {
    if (err) throw err;
    console.log('成功删除 /tmp/hello');
})
// 当使用同步操作时，任何异常都会被立即抛出
// 可以使用 try/catch 来处理异常
// 或让异常向上冒泡 ???
try {
    fs.unlinkSync('/tmp/hello');
    console.log('successfully deleted /tmp/hello');
  } catch (err) {
    // handle the error
  }
// 绝对路径
// 相对路径 相对 path.cwd()
// ------------------------------
// 1. 打开文件
// fs.open(path, flags[, mode], callback)
// path - 文件的路径。
// flags - 文件打开的行为。具体值详见下文。
// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
// callback - 回调函数，带有两个参数如：callback(err, fd)。
// -------------------------------
// 2. 获取文件信息
// fs.stat(path, callback)
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");
    
    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
 });
// stats类中有很多方法
// stats.isFile()
// stats.isDirectory()
// -------------------------------
// 3. 写入文件
// fs.writeFile(file, data[, options], callback)
// writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容
// w 模式: 以写入模式打开文件，如果文件不存在则创建。
// data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象
// -------------------------------
// 4. 读取文件
// fs.read(fd, buffer, offset, length, position, callback)
// fd - 通过 fs.open() 方法返回的文件描述符
// -------------------------------
// 5. 关闭文件
// fs.close(fd, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
var buf = new Buffer.alloc(1024)
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
       if (err){
          console.log(err);
       }
 
       // 仅输出读取的字节
       if(bytes > 0){
          console.log(buf.slice(0, bytes).toString());
       }
 
       // 关闭文件
       fs.close(fd, function(err){
          if (err){
             console.log(err);
          } 
          console.log("文件关闭成功");
       });
    });
 });
// -------------------------------
// 6. 截取文件
// fs.ftruncate(fd, len, callback)
// 截取10字节内的文件内容，超出部分将被去除
//  fs.ftruncate(fd, 10, function(err){}
// -------------------------------
// 7. 删除文件
// fs.unlink(path, callback)
// -------------------------------
// 8. 创建目录
// fs.mkdir(path[, mode], callback)
// fs.mkdir("/tmp/test/",function(err){}
// -------------------------------
// 9. 读取目录
// fs.readdir(path, callback)
fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
 });
// -------------------------------
// 10. 删除目录
// fs.rmdir(path, callback)
// -------------------------------
// 11. 文件更名 + 移动
// fs.rename(oldPath, newPath, [callback(err)])
// 同以目录下的文件更名
// 不同路径下的文件更名 + 移动
// 新的路径必须已存在，路径不存在会返回异常
// -------------------------------
// 12. 更改文件所有权
// fs.chown(path, uid, gid, [callback(err)])
// uid 用户ID
// gid 群体身份 (指共享资源系统使用者的身份)
// -------------------------------
// 13. 改写文件的读写权限
// fs.chmod(path, mode, callback)
// mode 读写权限（如：777）
// -------------------------------
// 14. 创建硬链接
// fs.link(srcpath, dstpath, [callback(err)])
// srcpath 为源目录或文件的路径
// dstpath 它是存放转换后的目录的路径，默认为当前工作目录
// -------------------------------
// 15. 获取真实路径 
// 可以使用process.cwd解决相对路径
// s.realpath(path, [cache], [callback(err , resolvedPath)])
// -------------------------------
// 16. 将 data 插入到文件里
// 如果文件不存在会自动创建。data可以是任意字符串或者缓存
// fs.appendFile(filename, data, [options], callback)
// -------------------------------
// 17. 对文件进行监视，并且在监视到文件被修改时执行处理
// fs.watchFile(filename, [options], listener)
// filename, 完整路径及文件名
// [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
// listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
fs.watchFile(file1, {
    interval: 20
}, function(curr, prev) {
    if (Date.parse(prev.ctime) == 0) {
        console.log('文件被创建');
    } else if (Date.parse(curr.ctime) == 0) {
        console.log('文件被删除');
    } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
    }
})