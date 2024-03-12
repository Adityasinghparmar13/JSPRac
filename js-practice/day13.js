
// Question: Create Web Worker

    const worker = new Worker('worker.js');
    worker.postMessage('Start');
    worker.onmessage = e => console.log(e.data);

// Question: Upload file with progress

    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = e => 
      console.log((e.loaded / e.total * 100).toFixed(0) + '%');
    xhr.open('POST', '/upload');
    xhr.send(formData);
