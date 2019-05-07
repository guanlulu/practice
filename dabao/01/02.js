var fn = require('./01.js') 
var res = fn(1,2)
console.log(res)

function getName(name) {
    this.name = name
}

window.getName = getName