var arr = [
    {id:1,age: 18,address: 'gdfg'},
    {id:2,age: 20,address: 'gdfgvdfv'},
    {id:3,age: 18,address: 'gdfedeg'},
    {id:4,age: 18,address: 'gdfedeg'}
]
for(item of arr) {
    if(item.age == 18) {
        if(item.address == 'gdfedeg') {
            if(item.id == 3) {
                continue
            }
        }
    }
    console.log(`id ${item.id},age is ${item.age}`)
}