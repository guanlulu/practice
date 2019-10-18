var number = 100000 // array大小
var iteranum = 100 // 迭代次数
var array = []
for(let i=0;i<number;i++)
{
    array[i] = i+1
}
var len = array.length

//duff's device 循环
console.time("device's device")
for(let k=0;k<iteranum;k++)
{
    let j = len % 8
    let templen = len-1
    while(j){
        j--
        array[templen--]+1
    }

    j = Math.floor(len / 8)

    while(j){
        j--
        array[templen--]+1
        array[templen--]+1
        array[templen--]+1
        array[templen--]+1
        array[templen--]+1
        array[templen--]+1
        array[templen--]+1
        array[templen--]+1
    }
}
console.timeEnd("device's device")