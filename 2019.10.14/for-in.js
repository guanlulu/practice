//for-in循环
console.time('for-in')
for(let k=0;k<iteranum;k++)
{
    for(let i in array)
    {
        array[i]+1
    }
}
console.timeEnd('for-in')



