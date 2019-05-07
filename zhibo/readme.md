### 常见直播协议
1. RTMP： 底层基于TCP，在浏览器端依赖Flash
2. HTTP-FLV: 基于HTTP流式IO传输FLV，依赖浏览器支持播放FLV
3. WebSocket-FLV: 基于WebSocket传输FLV，依赖浏览器支持播放FLV。WebSocket建立在HTTP之上，建立WebSocket连接前还要先建立HTTP连接
4. HLS: Http Live Streaming，苹果提出基于HTTP的流媒体传输协议。HTML5可以直接打开播放。
5. RTP: 基于UDP，延迟1秒，浏览器不支持  (那什么支持？移动端？)