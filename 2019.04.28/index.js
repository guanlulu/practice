class A {
    say() {
        console.log('foo')
    }
}
let a = new A()
// 输出 foo
// A.prototype = {
//     say() {
//         console.log('bar')
//     }
// }   
// 输出 bar
A.prototype.say = () =>  {
    console.log('bar')
}
a.say()