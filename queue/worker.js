var Queue = require('bee-queue');
var queue = new Queue('express-example');

queue.on('ready', function () {
  queue.process(function (job, done) {
    console.log('processing job ' + job.id);
    console.log(done)
    setTimeout(function () {
      done(null, job.data.x + job.data.y);
    }, 10);
  });

  console.log('processing jobs...');
});