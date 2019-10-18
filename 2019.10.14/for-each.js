var number = 100000 // array大小
var iteranum = 100 // 迭代次数
var array = []
for(let i=0;i<number;i++)
{
    array[i] = i+1
}
var len = array.length

//for each 循环
console.time("for each")
for(let k=0;k<iteranum;k++)
{
    array.forEach(function(e){
        e+1
    })
}
console.timeEnd("for each")



