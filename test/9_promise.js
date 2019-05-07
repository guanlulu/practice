//------- 简单例子
// function timeout (ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve(10),ms,'done')
//     })
// }

// timeout(100).then((value) => {
//     console.log(value) // 10
// })

//------- 判断一下顺序
// let promise = new Promise(function(resolve,reject) {
//     console.log('Promise')
//     reslove();
// })

// promise.then(() => {
//     console.log('resolved.')
// })

// console.log('hi')

// Promise
// hi
// resolved.

//-------异步加载图片      url------???
// function loadImageAsync(url) {
//     return new Promise(function(resolve,reject) {
//         const image = new Image()

//         image.onload = function() {
//             resolve(image)
//         }

//         image.onerror = function() {
//             reject(new Error('Could not load image at' + url))
//         }

//         image.src = url
//     })
// }


// 实现的 Ajax 操作的例子
// const getJSON = function(url) {
//     return new Promise(function(resolve,reject) {
//         const handler = function() {
//             if(this.readyState !== 4) {
//                 return
//             }
//             if(this.status === 200) {
//                 resolve(this.response)
//             }else {
//                 reject(new Error(this.statusText))
//             }
//         }
//         const client = new XMLHttpRequest()
//         client.open('GET',url)
//         client.onreadystatechange = handler
//         client.responseType = 'json'
//         client.setRequestHeader('Accept','application/json')
//         client.send()
//     })
// }

// getJSON('/users.json').then(function(response) {
//     console.log(response)
// },function(error) {
//     console.error(error)
// })
// reject函数的参数通常是Error对象的实例，表示抛出的错误
// resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
// const p1 = new Promise(function (resolve, reject) {
// // ...
// });
  
// const p2 = new Promise(function (resolve, reject) {
// // ...
// resolve(p1);
// })

// ------
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error('fail'))
    },3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(p1)
    },1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
// 由于p2返回的是另一个Promise, 导致p2自己的状态无效了，由p1 的状态决定 p2 的状态
// 所以then 语句都变成针对后者(p1)
// p1变成rejected ,导致触发 catch 方法指定的回调函数

// -------调用resolve或reject并不会终结 Promise 的参数函数的执行
// 调用resolve(1)以后，后面的console.log(2)还是会执行,并且会首先打印出来
// 立即 resolved 的 Promise 是在**本轮事件循环的末尾执行**，总是**晚于**本轮循环的同步任务
new Promise((resolve,reject) => {
    resolve(1)
    console.log(2)
}).then(r => {
    console.log(r)
})
// 2
// 1

// -------调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面
// 最好在它们前面加上return语句，这样就不会有意外
new Promise((resolve, reject) => {
    return resolve(1);
    // 后面的语句不会执行
    console.log(2);
  })