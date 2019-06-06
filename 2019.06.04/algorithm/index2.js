// 字符串转字符流
function s2ab(s) { 
    var buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i !== s.length; ++i) {
        //0xFF
        // make sure that the binary code is 8bit long 
        // charCodeAt will return a value in the range of 0..65536. This code truncates that range to 0..255
        view[i] = s.charCodeAt(i) & 0xFF
    }
    return buf
}