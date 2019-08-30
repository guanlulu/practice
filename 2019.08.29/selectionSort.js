function selectionSort(arr) {
    //console.time('SelectionSort');
    // 获取数组长度，确保每一项都被排序。
    let len = arr.length;
    // 遍历数组的每一项。
    for(let i=0; i<len; i++) {
        // 从数组的当前项开始，因为左边部分的数组项已经被排序。
        let min = i;
        for(let j=i; j<len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    //console.timeEnd('SelectionSort');
    return arr;
}