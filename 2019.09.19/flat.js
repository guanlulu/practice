import { Array } from "core-js"

// 扁平化n维数组
// Array.flat(n)是ES10扁平数组的api,n表示维度,n值为Infinity时维度为无限大
var arr1 = [1,[2,3]].flat(2)
console.log(arr1)
var arr2 = [1,[2,3,[4,5]]].flat(3)
console.log(arr2)

/**
 * arr.some
 * 遍历数组中每个元素，判断其**是否满足指定函数的指定条件**,返回true或者false
 * 如果一个元素满足条件,返回true,且后面的元素不再被检测
 * 所有元素都不满足条件，则返回false
 * 不会改变原始数组
 * 不会对空数组进行检测;数组为空的话，直接返回false
*/

/**
 * arrayObject.concat(arrayX,arrayX,......,arrayX)
 * concat() 方法用于连接两个或多个数组
 * 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
 * concat() 中的**参数**连接到数组 a
 * eg: [1,2,3].concat(4,5) => [1,2,3,4,5]
 * eg: arr.concat(arr2,arr3)
*/
/**
 * while 循环
*/
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
var flat_one = flatten([1,[2,3]])
var flat_two = flatten([1,[2,3,[4,5]]])
console.log(flat_one)
console.log(flat_two)