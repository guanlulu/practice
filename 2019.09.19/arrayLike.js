// slice Array.from ...
Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)
Array.prototype.slice.apply(arguments)
Array.from(arguments)
var arr = [...arguments]

Array.prototype.slice = function(start,end) {
    var result = new Array()
    start = satrt || 0
    end = end || this.length
    for(var i = start;i < end;i++) {
        result.push(this[i])
    }
    return result
}