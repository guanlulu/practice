// var obj = {a: 1,b:2}
// var {a,b} = obj
// console.log(a,b)
let keyword = '你好，我们，学习'
let keyword_arr = keyword.split(/,|，/).map(ele => {
    return {
        constant_score: {
            filter: {
                match: {
                    content: {
                        query: ele,
                        operator: "and"
                    }
                }
            }
        }
    }
})
console.log(keyword_arr)

