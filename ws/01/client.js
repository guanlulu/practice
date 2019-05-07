const WebSocket = require('ws')
let ws = new WebSocket('ws://localhost:3000/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
})

// WebSocket协议本身不要求同源策略（Same-origin Policy）
// 也就是某个地址为http://a.com的网页可以通过WebSocket连接到ws://b.com。
// 但是，浏览器会发送Origin的HTTP头给服务器，服务器可以根据Origin拒绝这个WebSocket请求。
// 所以，是否要求同源要看服务器端如何检查