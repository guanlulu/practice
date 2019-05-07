// Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的
// 作用是为 Promise 实例添加**状态改变**时的回调函数
// then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数
// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用**链式写法**


getJSON("/posts.json").then(function(json) {
    return json.post;
}).then(function(post) {
// ...
});

// 采用链式的then，可以指定一组按照次序调用的回调函数
// 前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作）
// 后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用

// --------------------------
// ----funcA funcB  可以有名字
// --------------------------
getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL);
  }).then(function funcA(comments) {
    console.log("resolved: ", comments);
  }, function funcB(err){
    console.log("rejected: ", err);
  });

// Promise.prototype.catch方法是.then(null, rejection)的别名
// 用于指定发生错误时的回调函数