// 创建一个WebSocket的服务器实例
const Websocket = require('ws')
const WebsocketServer = Websocket.Server
const wss = new WebsocketServer({
    port: 3000
})
// WebSocket请求接入
wss.on('connection',function(ws) {
    // ws WebSocket的实例 表示这个WebSocket连接
    ws.on('message',function(msg) {
        // 在收到消息后再返回一个ECHO: xxx的消息给客户端
        ws.send(`ECHO: ${msg}`,(err) => {
            if(err) {
                console.log(`SERVER error: ${err}`)
            }
        })
    })
})