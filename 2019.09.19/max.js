Math.max(...[1,2,3,4]) //4

Math.max.apply(this,[1,2,3,4]) //4

[1,2,3,4].reduce( (prev, cur,curIndex,arr)=> {
    return Math.max(prev,cur);
},0) //4