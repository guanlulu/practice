function test() {
    var a = b = 2
    console.log(a)
}
console.log(b) // b is not defined
test()
// console.log(b)