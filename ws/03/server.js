// var http = require("http");
var express = require("express");//引入express
var socketIo = require("socket.io");//引入socket.io

// var app = new express()
// var server = http.createServer(app)
var app = express();
var server = app.listen(3000)
console.log('app listen at port 3000...')
var io = new socketIo(server)

app.get('/client1',(req,res,next) => {
    res.sendFile(`${__dirname}/views/client1.html`)
})

app.get('/client2',(req,res,next) => {
    res.sendFile(`${__dirname}/views/client2.html`)
})

io.on('connection',(clientSocket) => {
    clientSocket.on('sendMsg',(data) => {
        // broadcast 表示 除自己以外的所有已连接的socket客户端
        clientSocket.broadcast.emit("receiveMsg",data)
    })
})