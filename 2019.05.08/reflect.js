import { networkInterfaces } from "os";

// Reflect是一个内置的对象，它提供拦截 JavaScript 操作的方法
// Reflect不是一个函数对象，因此它是不可构造的
// Reflect的所有的方法都是静态的就和Math一样，目前它还没有静态属性


// 原来存在Object上的方法，将它转义到了Reflect上，并作了小改动
// defineProperty
// getPrototypeOf(target) 返回指定对象的原型
// getOwnPropertyDescriptor() 返回给定的属性的属性描述符
// isExtensible(target) 判断一个对象是否可扩展
// preventExtensions(target) 阻止新属性添加到对象
// apply(func, thisArg, args)
// ownKeys(target) 返回一个包含所有自身属性（不包含继承属性）的数组
// 将原来操作符的功能，变成函数行为
// has(target,key) 
// deleteProperty(target,key)
// construct(target, argumentsList[, newTarget])  target构造函数，第二参数是构造函数参数类数组，第三个是new.target的值。
// get(target, key[, receiver]) 第三个参数是当要取值的key部署了getter时，访问其函数的this绑定为receiver对象
// set(target, key, value[, receiver]) 

// eg:
'assign' in Object
Reflect.has(Object,'assign')

Function.prototype.apply.call(Math.floor,undefined,[1.75])
// 相当于 
Math.floor.apply(undefined,[1.75])
Reflect.apply(Math.floor,undefined,[1.75])

delete myObj.foo
Reflect.deleteProperty(myObj,'foo')

const instance = new Greeting('张树')
const instance = Reflect.construct(Greeting,['张树'])

Object.definedProperty(Mydate,'now',{
    value: () => Date.now()
})
Reflect.definedProperty(Mydate,'now',{
    value: () => Date.now()
})

// 下面几项都会报错
Reflect.get(1,'foo')
Reflect.get(false,'foo')
Reflect.set(1,'foo',{})
Reflect.set(false,'foo',{})

var myObject =  {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar
    }
}

var myReceiverObject = {
    foo: 4,
    bar: 4
}
// get(target, key[, receiver]) 第三个参数是当要取值的key部署了getter时，访问其函数的this绑定为receiver对象
Reflect.get(myObject,'baz') // 3
Reflect.get(myObject,'baz',myReceiverObject) // 8