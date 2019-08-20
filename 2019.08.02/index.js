// 全局变量
var collection = [],
    active
    
var nodes = document.querySelectorAll('.list-item')
for(var i = 0,len = nodes.length;i < len;i++) {
    nodes[i].sortableInfo = {
        index: nodes[i].dataset.index
    }
    collection.push(
        {
            node: nodes[i]
        }
    )
}
console.log(collection)