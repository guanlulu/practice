// function Person(name){
//     this.name = name;
// }
// var p1 = new Person('louis');
  
// console.log(Person.prototype); // {constructor: Person(name),__proto__: Object}
// console.log(p1.__proto__)
// console.log(p1.__proto__ === Person.prototype)


// 原型链继承
function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
function Child(name) {
    this.name = name;
}

Child.prototype = new Parent('father');

// Child.prototype.__proto__ 指向 Parent的原型
// 所以调用函数的时候 sayName ,会去 原型链 上找


Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}

var child = new Child('son');
child.sayName();    // child name: son



// 这种方法存在两个缺点：
// 1. 子类型无法给超类型传递参数
//    在面向对象的继承中，我们总希望通过 var child = new Child('son', 'father'); 
//    用父类的构造器来完成继承。而不是通过像这样 new Parent('father') 去调用父类。
// 2. Child.prototype.sayName 必须写在 Child.prototype = new Parent('father'); 之后，
//    不然就会被覆盖掉。