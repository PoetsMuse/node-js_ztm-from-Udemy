const {
    isMainThread, 
    workerData,
    Worker,
} = require('worker_threads');

if (isMainThread){
    console.log('Main thread id:' + process.pid);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 4, 8, 9]
    });
} else {
    console.log('Worker process id:' + process.pid);
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}

