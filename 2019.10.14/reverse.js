var number = 100000 // array大小
var iteranum = 100 // 迭代次数
var array = []
for(let i=0;i<number;i++)
{
    array[i] = i+1
}
var len = array.length

//倒序for循环
console.time('reverse for')
for(let k=0;k<iteranum;k++)
{
    for(let i=len-1;i--;)
    {
        array[i]+1
    }
}
console.timeEnd('reverse for')



