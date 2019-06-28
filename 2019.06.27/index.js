var c = {
    n: 1
}
var d = c
c.x = c = {n: 2}
console.log(c.x) // undefined
console.log(d.x) // {n: 2}
// https://blog.csdn.net/xiaye_go/article/details/83897115