// 单层结构 获取所有pid
function familyTree(arr, pid) {
    var temp = [];
    var forFn = function(arr, pid) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]
            if (item.id == pid) {
                temp.push(item)
                forFn(arr, item.pid)
            }
        }
    }
    forFn(arr, pid)
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

var tmp = familyTree(dataTree,14)
console.log(tmp)