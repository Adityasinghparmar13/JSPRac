
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

// Question: Implement React-like useState hook

    let hooks = [];
    let idx = 0;
    function useState(initial) {
      let state = hooks[idx] || initial;
      let _idx = idx;
      function setState(newVal) {
        hooks[_idx] = newVal;
        render();
      }
      idx++;
      return [state, setState];
    }

// Question: Create WebSocket client

    const ws = new WebSocket('wss://echo.websocket.org');
    ws.onopen = () => ws.send('Hello');
    ws.onmessage = e => console.log('Received:', e.data);

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

// Question: Convert callback to promise

    function promisify(fn) {
      return (...args) => new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    }

// Question: Implement React-like useState hook

    let hooks = [];
    let idx = 0;
    function useState(initial) {
      let state = hooks[idx] || initial;
      let _idx = idx;
      function setState(newVal) {
        hooks[_idx] = newVal;
        render();
      }
      idx++;
      return [state, setState];
    }

// Question: Implement LRU cache

    class LRUCache {
      constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
      }
      get(key) {
        if(!this.cache.has(key)) return -1;
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
      }
      put(key, value) {
        if(this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if(this.cache.size > this.capacity) 
          this.cache.delete(this.cache.keys().next().value);
      }
    }
