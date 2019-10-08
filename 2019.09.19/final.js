// 每一项设置值
// fill是ES6的方法
// array.fill(value, start, end)
var arr = [1,2,3].fill(false)

// 每一项是否满足
// es5 api
// 每一项都满足返回true
[1,2,3].every(v => v > 2)

// 有一项满足
// es5 api
[1,2,3].some(v => v > 2)

// 过滤数组
[1,2,3].filter(v => v > 1)

// 对象和数组转化
Object.keys({name:'张三',age:14}) //['name','age']
Object.values({name:'张三',age:14}) //['张三',14]
Object.entries({name:'张三',age:14}) //[[name,'张三'],[age,14]]
Object.fromEntries([name,'张三'],[age,14]) //ES10的api,Chrome不支持 , firebox输出{name:'张三',age:14}