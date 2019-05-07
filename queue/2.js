var Queue =require('bull');
var videoQueue =newQueue('video transcoding', 'redis://127.0.0.1:6379');
var audioQueue =newQueue('audio transcoding', {redis: {port:6379, host:'127.0.0.1', password:'foobared'}});
 // Specify Redis connection using objectvar 
var imageQueue =newQueue('image transcoding');
var pdfQueue =newQueue('pdf transcoding');
videoQueue.process(function(job, done){
 // job.data contains the custom data passed when the job was created
 // job.id contains id of this job.
 // transcode video asynchronously and report progressjob.progress(42);
 // call done when finished done();
 // or give a error if error done(newError('error transcoding'));
 // or pass it a result done(null, { framerate:29.5/* etc... */ });
 // If the job throws an unhandled exception it is also handled correctly throw newError('some unexpected error');
});
audioQueue.process(function(job, done){
 // transcode audio asynchronously and report progressjob.progress(42);
 // call done when finished done();
 // or give a error if error done(newError('error transcoding'));
 // or pass it a result done(null, { samplerate:48000/* etc... */ });
 // If the job throws an unhandled exception it is also handled correctly throw newError('some unexpected error');
});
imageQueue.process(function(job, done){
 // transcode image asynchronously and report progressjob.progress(42);
 // call done when finisheddone();
 // or give a error if error done(newError('error transcoding'));
 // or pass it a result done(null, { width:1280, height:720/* etc... */ });
 // If the job throws an unhandled exception it is also handled correctly throw newError('some unexpected error');
});
pdfQueue.process(function(job){
 // Processors can also return promises instead of using the done callback return pdfAsyncProcessor();
});
videoQueue.add({video:'http://example.com/video1.mov'});
audioQueue.add({audio:'http://example.com/audio1.mp3'});
imageQueue.add({image:'http://example.com/image1.tiff'});



videoQueue.process(function(job){ 
// don't forget to remove the done callback!
// Simply return a promise return fetch Video(job.data.url).then(transcodeVideo);
// Handles promise rejection return Promise.reject(newError('error transcoding'));
// Passes the value the promise is resolved with to the"completed" event return Promise.resolve({ framerate:29.5/* etc... */ });
// If the job throws an unhandled exception it is also handled correctly throw newError('some unexpected error');
// same as return Promise.reject(newError('some unexpected error'));
});


// processor.jsmodule.exports=function(job){
 // Do some heavy work 
 // return Promise.resolve(result);
// }


// Single process:
queue.process('/path/to/my/processor.js');
// You can use concurrency as well:
queue.process(5, '/path/to/my/processor.js');
// and named processors:
queue.process('my processor', 5, '/path/to/my/processor.js');


/**
 * 重复作业
 * 可以根据cron规范将作业添加到队列中并重复处理
 *  */
paymentsQueue.process(function(job){
    //Check payments
});
//Repeat payment job once every day at 3:15 (am)
paymentsQueue.add(paymentsData, {repeat: {cron: '15 3 * * *'}});


/**
 * 暂停/恢复
 * 可以在全局( 通过 true 暂停这里工作线程的处理) 中暂停和恢复队列
 *  */
queue.pause().then(function(){
    // queue is paused now
});
queue.resume().then(function(){
    // queue is resumed now
})

// 每个队列实例都需要新的redis连接，检查如何重用连接
//或者你也可以使用名为processors的处理器来达到类似的结果

// --------------------------------------------------------------------
// ？？？？？？？？？？？？？？？？？？
// 集群支持
// 注意：从 3.2.0版本和上版本中，建议使用线程处理器。
// 队列是健壮的，可以在几个线程或者进程中并行运行，不需要任何危险或者队列损坏。 
// 使用集群检查这里简单示例，使作业并行于进程
var Queue =require('bull'),cluster =require('cluster');
var numWorkers =8;
var queue =newQueue("test concurrent queue");
if(cluster.isMaster){
    for (var i =0; i < numWorkers; i++) {
        cluster.fork();
    }
    cluster.on('online', function(worker) {
        // Lets create a few jobs for the queue workers
        for(var i=0; i<500; i++){
            queue.add({foo:'bar'});
        };
    });
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker '+worker.process.pid+' died');
    });
}else{
 queue.process(function(job, jobDone){
    console.log("Job done by worker", cluster.worker.id, job.id);
    jobDone();
 });
}
// ？？？？？？？？？？？？？？？？？？
// ----------------------------------------------------------------

// 队列针对"至少一次"工作策略。 
// 这意味着在某些情况下，作业可以被多次处理。 
// 在工作期间，当工作人员不能保持给定作业的锁定时，大多数情况下会发生这种情况。
// -------------------------------------------------
// 工人正在处理作业时，将保留作业"锁定"以便其他员工不能处理它
// 要了解锁定如何工作以防止作业丢失它的锁- 成为延迟并重新启动，这一点十分重要