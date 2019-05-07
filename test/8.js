var Progress = require('cli-progress')
var _colors = require('colors')
const bar = new Progress.Bar({
    format: 'progress'+ _colors.green('{bar}') +' {percentage}% | ETA: {eta}s | {value}/{total} | Speed: {speed} kbit',
    barCompleteChar: '#',
    barIncompleteChar: '.',
    // fps: 5, // the maximum update rate (default: 10)
    stream: process.stdout, // output stream to use (default: process.stderr)
    barsize: 65, // the length of the progress bar in chars (default: 40)
    position: 'center'
});
// function timeout(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
//   async function asyncValue(value) {
//     var res = await timeout(50);
//     console.log(res)
//     return value;
//   }
//   var cc = asyncValue(10)
//   console.log(cc)

// console.log(1);
// new Promise(function (resolve, reject){
//     reject(true);
//     window.setTimeout(function (){
//         resolve(false);
//     }, 0);
// }).then(function(){
//     console.log(2);
// }, function(){
//     console.log(3);
// });
// console.log(4);


bar.start(1)
bar.setTotal(30)
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            bar.increment(1)
            resolve();
        }, time);
    })
};

var start = async function () {
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();




bar.stop()
