// 冒泡排序
function bubbleSort(arr) {
    //console.time('BubbleSort');
    // 获取数组长度，以确定循环次数。
    let len = arr.length;
    // 遍历数组len次，以确保数组被完全排序。
    for(let i=0; i<len; i++) {
        // 遍历数组的前len-i项，忽略后面的i项（已排序部分）。
        for(let j=0; j<len - 1 - i; j++) {
            // 将每一项与后一项进行对比，不符合要求的就换位。
            if(arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }
    //console.timeEnd('BubbleSort');
    return arr;
}