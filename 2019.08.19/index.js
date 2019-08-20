function fn(num,str,cb) {
    if(!num || !str || !cb) {
        console.log('传入参数不正确')
        return
    }
    console.log(arguments)
}

// fn(1,'asdf',function() {

// })

fn()

let obj = {a: 1,b: 2}
// console.log(obj.c)
// let {a,b} = obj
// console.log(a,b)

for(let i in obj) {
    console.log(i)
}

let arr = ['aaaa','bbbb']
for(let i of arr) {
    console.log(i)
}

function fn2() {
    if(true) {
        console.log('fn2 stop')
        return
        console.log('')
    }
    
}

function fn3() {
    console.log('before')
    fn2()
    console.log('after')
}

fn3()

