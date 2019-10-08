// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// initialValue 传递给函数的初始值
var arr = [1,2,3,4].reduce(function (prev, cur) {
    return prev + cur;
},0) //10
console.log(arr)

function sum(arr) {
    var len = arr.length;
    if(len == 0) return 0
    if(len == 1) return arr[0]
    else return arr[0] + sum(arr.slice(1)) 
}
var arr_sum = sum([1,2,3,5])
console.log(arr_sum)