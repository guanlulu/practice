import { Array } from "core-js"

/**
 * set是ES6新出来的一种一种定义不重复数组的数据类型
 * Array.from是将类数组转化为数组
 * ...是扩展运算符,将set里面的值转化为字符串
*/
var arr_one = Array.from(new Set([1,2,3,3,4,4])) //[1,2,3,4]
var arr_two = [...new Set([1,2,3,3,4,4])] //[1,2,3,4]
console.log(arr_one)
console.log(arr_two)

Array.prototype.distinct = function() {
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length
    for(i = 0;i < len;i++) {
        for(j = i + 1;j < len;j++) {
            if(arr[i] === arr[j]) {
                j = ++i
            }
        }
        result.push(arr[i])
    }
    return result
}