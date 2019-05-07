const Queue = require('bull');
const name = 'test';

// Node side
const processQueue = new Queue(name);

// 使用 done
processQueue.process(5, async (job,done) => {
    try {
        await new Promise(r => setTimeout(r, 1000));
        done(null, true);
    }
    catch (e) {
        done(e, null);
    }
});

// 使用Promise，不要done
// ------------------------------
// processQueue.process(5, async (job) => {
//     try {
//         await new Promise(r => setTimeout(r, 1000));
//         // done(null, true);
//         return Promise.resolve('task ended')
//     }
//     catch (e) {
//         Promise.reject(new Error('exits error'))
//     }
// });

processQueue.on('completed',(job,result) => {
    console.log(`Job ${job.id} is completed: ${result}`)
})

// Server side
const jobs = [];
async function test(name) {
    // const queue = new Queue(name);
    
    for (let i = 0; i < 10; i++) {
        const job = await processQueue.add({
            test: 'Hello!' + i
        });
        jobs.push(job.finished());
    }
    
    var res = await Promise.all(jobs); // 有什么用？？？
    console.log(res) // [ true, true, true, true, true, true, true, true, true, true ]
}

test();

