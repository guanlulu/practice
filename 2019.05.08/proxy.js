//Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）
// 等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程

// Proxy 就像在目标对象之间的一个代理，任何对目标的操作都要经过代理。
// 代理就可以对外界的操作进行过滤和改写

// Proxy是构造函数，它有两个参数target和handler
// target是用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
// handler是一个对象，其属性是当执行一个操作时定义代理的行为的函数

var obj = new Proxy({},{
    get: function(target, key, recevier) {
        console.log(`getting ${key}!`)
        return Reflect.get(target,key,recevier)
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`)
        return Reflect.set(target, key, value, receiver)
    }
})

obj.count = 1
++obj.count
// console.log(obj.count)

// Proxy 只有一个静态方法 revocable(target,handler)可以用来创建一个可撤销的代理对象
// 返回一个包含了所生成的代理对象本身以及该代理对象的撤销方法的对象
// 一旦某个代理对象被撤销，它将变的几乎完全不可用，在它身上执行任何的可代理操作都会抛出 TypeError 异常
// 一旦被撤销，这个代理对象永远不可能恢复到原来的状态，同时和它关联的目标对象以及处理器对象将有可能被垃圾回收掉。调用撤销方法多次将不会有任何效果，当然，也不会报错
// 可代理操作一共有 14 种，执行这 14 种操作以外的操作不会抛出异常

var revocable = Proxy.revocable({},{
    get(target,name) {
        // return "[[" + name + "]]"
        return `[[${name}]]`
    }
})
// revocable -> {"proxy": proxy, "revoke": revoke}
// console.log(revocable)
var proxy = revocable.proxy
// console.log(proxy.foo)
proxy.foo
revocable.revoke() // 执行撤销方法
proxy.foo // TypeError: Cannot perform 'get' on a proxy that has been revoked
typeof proxy            // "object"，因为 typeof 不属于可代理操作


// handler 参数是代理函数对象，它一共支持 13 种拦截函数。和Reflect的相同
// 如果没有定义某种操作，那么这种操作会被转发到目标对象身上


const proxy = new Proxy({},{
    get: function(target,property,receiver) {
        return recevier
        // receiver 总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例
    }
})
proxy.getRecevier === proxy

// 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，
// 否则通过 Proxy 对象访问该属性会报错
const target = Object.definedProperties({},{
    foo: {
        value: 123,
        writable: false,
        configeurable: false
    }
})
const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed



// apply 方法拦截函数的调用，call和 apply操作
var target = function() {return 'target'}
var handler = {
    apply: function() {
        return 'apply'
    }
}
var p = new Proxy(target,handler)
p()


// defineProperty 方法拦截了Object.defineProperty操作
var handler = {
    definedProperty(target,key,descriptor) {
        return false
    }
}
var target = {}
var proxy = new Proxy(target,handler)
proxy.foo = "bar"  // 没有失效 ???-----------
// defineProperty 方法返回 false，导致添加新属性总是无效 ???-----------
// 如果目标对象不可扩展（non-extensible），则defineProperty不能增加目标对象上不存在的属性，否则会报错
// 如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty方法不得改变这两个设置

// getPrototypeOf方法主要用来拦截获取对象原型，会拦截以下这些操作：

// Object.prototype.__proto__
// Object.prototype.isPrototypeOf()
// Object.getPrototypeOf()
// Reflect.getPrototypeOf()
// instanceof


// ownKeys方法用来拦截对象自身属性的读取操作，会拦截以下操作：
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()
// for...in

// 通过代理，你可以轻松地验证向一个对象的传值
let validator = {
    set: function(obj,prop,value) {
        if(prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer')
            }
            if(value > 200) {
                throw new TypeError('The age seems invalid')
            }
        }
        obj[prop] = value
    } 
}

let person = new Proxy({},validator)
person.age = 100
console.log(person.age)
person.age = 'young'
console.log(person.age)
person.age = 300
console.log(person.age)

// this 指向
// Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理
// 不做任何拦截的情况下，也无法保证与目标对象的行为一致
// 主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理

const target = {
    m: function() {
        console.log(this === proxy)
    }
}
const handler = {}
const proxy = new Proxy(target,handler)
target.m()
proxy.m()

const target = new Date()
const handler = {}
const proxy = new Proxy(target,handler)
proxy.getDate() // TypeError: this is not a Date object
// getDate 方法只能在Date对象实例上面拿到，
// 如果this不是Date对象实例就会报错。
// 这时，this绑定原始对象，就可以解决这个问题
const target = new Date('2015-01-01')
const handler = {
    get(target,prop) {
        if(prop === 'getDate') {
            // bind 不会立即调用 apply/call 会立即调用
            return target.getDate.bind(target)
        }
        return Reflect.get(target,prop)
    }
}
const proxy = new Proxy(target,handler)
proxy.getDate()

// Proxy 的作用
// 对于代理模式 Proxy 的作用主要体现在三个方面
// 1. 拦截和监视外部对象的访问
// 2. 降低函数或类的复杂度
// 3. 在复杂操作前对操作进行校验或者对所需资源进行管理
// 兼容性
// Ie 11 Edge >= 15 FF >= 57 

// Proxy必须是浅拷贝，如果是深拷贝则会失去了代理的意义 ???-----------