// 可执行文件
function originFunc(a,b) {
    console.log(a+b)
}
let proxyFunc = new Proxy(originFunc,{
    apply(target,ctx,args) {
        console.log('func have been invoked')
        return target.apply(ctx,args)
    }
}) 
proxyFunc(12,1)