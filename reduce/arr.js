var arr = [
    {id: 1,name: '丽丽'},
    {id: 2,name: 'Bob'},
    {id: 3,name: '芳芳'},
    {id: 4,name: 'Alice'},
]

var res = arr.reduce((x,y) => {
    let result = x.id > y.id ? x : y
    console.log(JSON.stringify(result))
    return result
})

console.log(res)
console.log(`${res.name} 的 id 是最大的`)