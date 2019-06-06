// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
//  excel 列位置
function getCharCol(n) {
    let s = ''
    let m = 0
    while (n > 0) {
      m = n % 26 + 1
      s = String.fromCharCode(m + 64) + s
      n = (n - m) / 26
    }
    return s
}

// function getCharCol(n) {
//     let s = ''
//     let m = 0
//     while (n >= 0) {
//       m = n % 26 + 1
//       s = String.fromCharCode(m + 64) + s
//       n = Math.floor((n - m) / 26)
//     }
//     return s
// }

getCharCol(27)