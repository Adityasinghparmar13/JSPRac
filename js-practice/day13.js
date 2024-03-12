
// Question: Create Web Worker

    const worker = new Worker('worker.js');
    worker.postMessage('Start');
    worker.onmessage = e => console.log(e.data);
