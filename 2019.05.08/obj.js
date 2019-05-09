(() => {
    let target = {}
    let handlers = {
        get: (target,prop) => {
            target[prop] = (prop in target) ? target[prop] : {}
            if(typeof target[prop] === 'object') {
                return new Proxy(target[prop],handlers)
            }
            return target[prop]
        }
    }

    let proxy = new Proxy(target,handlers)
    console.log('z' in proxy.x.y)
    proxy.x.y.z = 'hello'
    console.log('z' in proxy.x.y)
    console.log(proxy.x.y.z)
})()