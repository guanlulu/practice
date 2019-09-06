//找到某一父节点下的所有子节点
function sonsTree(arr, id) {
    var temp = [],
    lev = 0;
    var forFn = function(arr, id, lev) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]
            if (item.pid == id) {
                item.lev = lev;
                temp.push(item);
                forFn(arr, item.id, lev + 1)
            }
        }
    }
    forFn(arr, id, lev)
    return temp
}

var dataTree = [
    { id: 1, address: '安徽', pid: 0 },
        { id: 6, address: '安徽a', pid: 1 },
            { id: 12, address: '安徽aa', pid: 6 },
                { id: 14, address: '安徽aaa', pid: 12 },
                    { id: 15, address: '安徽aaaa', pid: 14 },
        { id: 7, address: '安徽b', pid: 1 },
            { id: 13, address: '安徽bb', pid: 7 },
    { id: 2, address: '江苏', pid: 0 },
        { id: 8, address: '江苏a', pid: 2 },
        { id: 9, address: '江苏b', pid: 2 },
    { id: 3, address: '合肥', pid: 0 },
        { id: 10, address: '合肥a', pid: 3 },
        { id: 11, address: '合肥b', pid: 3 },  
]

var res = sonsTree(dataTree,1)
console.log(res)