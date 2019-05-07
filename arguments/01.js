// for(var i = 0;i< 5;i++) {
//     fn(i)
// }
// function fn (i) {
//     console.log(i)
// }

function fn1(a,b,c) {
    var args = Array.prototype.slice.call(arguments);
    console.log(args)
}

function fn2(a,b,c) {
    (function(a) {
        var args = Array.prototype.slice.call(arguments);
        console.log(args)
    })(a)
}
fn1(1,2,3)
fn2(1,2,3)