// 类式继承
function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
Parent.prototype.doSomthing = function() {
    console.log('parent do something!');
}
function Child(name) {
    Parent.call(this, parentName);
}

// Child.prototype.sayName = function() {
//     console.log('child name:', this.name);
// }

// var child = new Child('son');
// child.sayName();      // child name: son
// child.doSomthing();   // TypeError: child.doSomthing is not a function
