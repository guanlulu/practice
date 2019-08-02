const http = require("http");
const Path = require("path");
const fs = require("fs");

var server = http.createServer(function (req,res){
    fs.createReadStream(Path.resolve(__dirname,"."+req.url)).pipe(res);
})
server.listen(8000);
// https://juejin.im/post/5ccfe8876fb9a032092e9cf4
// 服务启动 访问 http://127.0.0.1:8000/index.html