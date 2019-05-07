// var list = [
//     {id: 1,kw: '慰问，仍然，出错'},
//     {id: 2,kw: '地方，刚发的,greg'},
//     {id: 3,kw: '哈哈,非官方，官方'}
// ]

// var arr = []
// list.map((item) => {
    
//     var arr1 = item.kw.split(/,|，/)
//     arr1.map((sub) => {
//         arr.push({id:item.id,kw: sub})
//     }) 

// })

// // console.log(arr)
// var arr2 = []
// for(item of arr) {
//     arr2.push(item.id)
// }

// console.log(Array.from(new Set(arr2)))

// let arr = ['q', 'w', 'e', 'r', 't', 'y'];
// let aaa = ['q', 'y'];
// // arr = arr.filter(item => !aaa.some(aaaItem => aaaItem === item));
// // arr1 = aaa.some(aaaItem => aaaItem === 'q')
// var arr2 = arr.filter(item => !aaa.some(aaaItem => aaaItem === item))
// console.log(arr2)  //["w", "e", "r", "t"]



// {
// 	"query": {
// 		"match": {
// 			"content" : {
//                 "query" : "生意",
//                 "operator" : "and"
//             }
// 		}
// 	},
// 	"highlight" : {
//         "pre_tags" : ["【"],
//         "post_tags" : ["】"],
//         "fields" : {
//             "content" : {}
//         }
//     }
// }

// 反选
// var idList = [1,2,3]
// var item_include_arr = [1,2]
// var item_exclude_arr = idList.filter(item => item_include_arr.indexOf(item) === -1)
// console.log(item_exclude_arr)
