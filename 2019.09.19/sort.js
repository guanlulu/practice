// sort 函数
// 默认是升序
var arr = [1,2,3,4].sort((a,b) => a - b)
var arr_resever = [1,2,3,4].sort((a,b) => b - a)
console.log(arr)
console.log(arr_resever)

// 冒泡排序
Array.prototype.bubleSort = function() {
    var arr = this,
        len = arr.length
    for(let outer = len;outer >= 2;outer--) {
        for(let inner = 0;inner <= outer - 1;inner++) {
            if(arr[inner] > arr[inner + 1]) {
                [arr[inner],arr[inner + 1]] = [arr[inner + 1],arr[inner]]
            }
        }
    }
    return arr
}

var arr_buble = [2,3,1,0].bubleSort()
console.log(arr_buble)

// 选择排序
Array.prototype.selectSort = function() {
    let arr = this,
        len = arr.length
    for(let i = 0;i < len; i++) {
        for(let j = i;j < len;j++) {
            if(arr[i] > arr[j]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}
var arr_select = [2,3,1,0].bubleSort()
console.log(arr_select)