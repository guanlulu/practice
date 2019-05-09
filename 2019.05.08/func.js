// 没有使用new关键字来调用的话，Class对象会直接抛出异常
// 解决方式
class Test {
    constructor(a,b) {
        console.log('constructor',a,b)
    }
}

let proxyClass = new Proxy(Test,{
    apply(target,ctx,args) {
        return new (target.bind(ctx,...args))()
    }
})

proxyClass(1,2)

// 禁止使用new关键字来调用
// 解决方式
function add(a,b) {
    return a + b
}
let proxy = new Proxy(add,{
    construct(target,args,newTarget) {
        throw new Error(`Function ${target.name} cannot be invoked with new`)
    }
})

// 统计函数调用次数
function originFunc() {}
let proxyFunc = new Proxy(originFun,{
    apply(target,ctx,args) {
        console.log('func have been inviked')
        return target.bind(ctx,...args)
    }
}) 
proxyFunc()