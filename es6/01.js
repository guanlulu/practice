// 1. 新的变量申明方式
// let const
// ---------提供了块级作用域 不再具备变量提升
// -------------------------------------
{
    let a = 20;
}

console.log(a);  // a is not defined
// -------------------------------------
// ES5
console.log(a);   // undefined
var a = 20;

// ES6
console.log(a); // a is not defined
let a = 20;
// -------------------------------------
// 代码编译成为了ES5之后，仍然会存在变量提升
// 2. 箭头函数
// 主要是要注意this指向
// 在ES6中，会默认采用严格模式 箭头函数本身并没有this 
// 3. 模板字符串
// ``
// 4. 解构赋值
// 比如
// section1 
import React, { Component } from 'react';

// section2
export { default } from './Button';

// section3
const { click, loading } = this.props;
const { isCheck } = this.state;
// es6 数组也有属于自己的解析结构
const arr = [1, 2, 3];
const [a, b, c] = arr;
// 5. 函数默认参数
// es5
function add(x, y) {
    var x = x || 20;
    var y = y || 30;
    return x + y;
}

console.log(add()); // 50
// es6
function add(x = 20, y = 30) {
    return x + y;
}

console.log(add());
// 在实际开发中给参数添加适当的默认值，可以让我们对函数的参数类型有一个直观的认知
const ButtonGroupProps = {
    size: 'normal',
    className: 'xxxx-button-group',
    borderColor: '#333'
}

export default function ButtonGroup(props = ButtonGroupProps) {
    // ... ...
}
// 6. 展开运算符
// 在ES6中用...来表示展开运算符，它可以将数组方法或者对象进行展开
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 10, 20, 30];

// 这样，arr2 就变成了[1, 2, 3, 10, 20, 30];
const obj1 = {
    a: 1,
    b: 2, 
    c: 3
  }
  
  const obj2 = {
    ...obj1,
    d: 4,
    e: 5,
    f: 6
  }
  
// 结果类似于 const obj2 = Object.assign({}, obj1, {d: 4})
// 展开运算符还常常运用在解析结构之中
// 例如我们在Raect封装组件的时候常常不确定props到底还有多少数据会传进来，就会利用展开运算符来处理剩余的数据。
// 展开运算符还用在函数的参数中，来表示函数的不定参。只有放在最后才能作为函数的不定参，否则会报错
// 所有参数之和
// 函数的不定参
const add = (a, b, ...more) => {
    return more.reduce((m, n) => m + n) + a + b
}

console.log(add(1, 23, 1, 2, 3, 4, 5)) // 39
// 7. 对象字面量 与 class
// ES6针对对象字面量做了许多简化语法的处理
// 当属性与值的变量同名时
const name = 'Jane';
const age = 20

// es6
const person = {
  name,
  age
}

// es5
var person = {
  name: name,
  age: age
};
// 比如在一个模块对外提供接口时
const getName = () => person.name;
const getAge = () => person.age;

// commonJS的方式
module.exports = { getName, getAge }

// ES6 modules的方式
export default { getName, getAge  }
// 除了属性之外，对象字面量写法中的方法也可以有简写方式
// es6
const person = {
    name,
    age,
    getName() { // 只要不使用箭头函数，this就还是我们熟悉的this
      return this.name
    }
  }
  
  // es5
  var person = {
    name: name,
    age: age,
    getName: function getName() {
      return this.name;
    }
  };
  // 在对象字面量中可以使用中括号作为属性，表示属性也能是一个变量了
  const name = 'Jane';
  const age = 20
  
  const person = {
    [name]: true,
    [age]: true
  }
// Class
// ES5
// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // 原型方法
  Person.prototype.getName = function() {
    return this.name
  }
  
  // ES6
  class Person {
    constructor(name, age) {  // 构造函数
      this.name = name;
      this.age = age;
    }
  
    getName() {  // 原型方法
      return this.name
    }
  }
  // 需要注意的几点
  class Person {
    constructor(name, age) {  // 构造函数
      this.name = name;
      this.age = age;
    }
  
    getName() {   // 这种写法表示将方法添加到原型中
      return this.name
    }
  
    static a = 20;  // 等同于 Person.a = 20
  
    c = 20;   // 表示在构造函数中添加属性 在构造函数中等同于 this.c = 20
  
  // 箭头函数的写法表示在构造函数中添加方法，在构造函数中等同于this.getAge = function() {}
    getAge = () => this.age   
  
  }
  // 箭头函数需要注意的仍然是this的指向问题
  // 因为箭头函数this指向不能被改变的特性
  // 因此在react组件中常常利用这个特性来在不同的组件进行传值会更加方便__________？？？

  // 继承 extends
  class Person {
    constructor(name, age) { // // 构造函数
      this.name = name;
      this.age = age;
    }
  
    getName() { // 原型方法
      return this.name
    }
  }
  
  // Student类继承Person类
  class Student extends Person {
    constructor(name, age, gender, classes) {
    // super方法，它表示构造函数的继承
    // 与ES5中利用call/apply继承构造函数是一样的功能
      super(name, age);
      this.gender = gender;
      this.classes = classes;
    }
  
    getGender() {
      return this.gender;
    }
  }
  // 8. Promise
  // 9. 模块 Modules



























