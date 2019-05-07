// 1. 使用for循环和slice功能
function chunkArray(myArray, chunk_size) {
    var myChunk
    var arrayLength = myArray.length
    var tempArray = []

    for(var i = 0;i < arrayLength;i+= chunk_size) {
        myChunk = myArray.slice(i,i+chunk_size)
        tempArray.push(myChunk)
    }

    return tempArray

}
var result = chunkArray([1,2,3,4,5,6,7],3)
console.log(result) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

// 2. 在数组原型中使用for循环，slice和设置函数
// 使用this
Object.definedProperty(Array.prototype,'chunk',{
    value : function(chunkSize) {
        var temporal = []

        for(var i = 0;i < this.length; i+=chunkSize) {
            temporal.push(this.slice(i,i+chunkSize))
        }

        return temporal
    }
})

// 3. 在数组原型中使用数组映射
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// var array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Object.definedProperty(Array.prototype,'chunk',{
    value: function(chunkSize){
        var that = this
        return Array(Math.ceil(that.length/chunkSize)).fill().map(function(_,i){
            return that.slice(i*chunkSize,i*chunkSize+chunkSize);
        })
    } 
})



// 4. 使用while循环和splice
// 在典型和正常情况下，while循环稍快一些。
// 但是我们应该意识到，这些性能增益对​​于大量迭代非常重要。
// 因此，如果您的阵列很大并且您希望以较小的数字拆分，则应考虑使用while的方法来大幅提高性能
// splice() 方法用于插入、删除或替换数组的元素。 
// 这种方法会改变原始数组 !!!
// array.splice(index,howmany,item1,.....,itemX) item为替换元素
function chunkArray(myArray,chunk_size) {
    var results = []

    while(myArray.length) {
        results.push(myArray.splice(0,chunk_size))
    }

    return results
}


// 5. 在递归函数中使用slice和concat
// 在这种方法中，如果我们谈论性能和浏览器资源，递归是相当昂贵的。
// 此外，concat某些浏览器的功能明显慢于该join方法
Array.prototype.chunk = function(chunk_size) {
    if(!this.length) {
        return []
    }

    return [this.slice(0,chunk_size)].concat(this.slice(chunk_size).chunk(chunk_size))
}