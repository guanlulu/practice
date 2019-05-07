import debug from 'debug'
var a = debug('worker:a')
  , b = debug('worker:b');


var btn = document.querySelector('button')
btn.onclick = function () {
    work();
    workb();
}


function work() {
  a('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}


function workb() {
  b('doing some work');
  setTimeout(workb, Math.random() * 2000);
}

