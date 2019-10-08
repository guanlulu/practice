var arr = [1,2,3,4].concat([5,6]) //[1,2,3,4,5,6]
var arr2 = [...[1,2,3,4],...[4,5]] //[1,2,3,4,5,6]
console.log(arr,arr2)

// 此方法改变 a 数组
// JS数组追加数组采用push.apply的坑
// https://blog.csdn.net/Quincylk/article/details/84136230
var a = [1,2,3,4],b = [5,6]
var arr3 = [].push.apply(a,b) //[1,2,3,4,5,6]

console.log(a,arr3)

// 判断是否包含值
// includes(),find(),findIndex()是ES6的api
var flag = [1,2,3].includes(4) //false
var flag2 = [1,2,3].indexOf(4) //-1 如果存在换回索引
var flag3 = [1, 2, 3].find(item => item===3) //3 如果数组中无值返回undefined
var flag4 = [1, 2, 3].findIndex(item => item===3) //2 如果数组中无值返回-1

// some es5
var flag5 = [1,2,3].some(v => v===4)
console.log(flag,flag2,flag3,flag4,flag5)