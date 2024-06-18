
// Question: 28. Async middleware pipeline
```javascript
async function pipeline(middlewares, initial) {
    return middlewares.reduce(
        (acc, middleware) => acc.then(val => middleware(val)),
        Promise.resolve(initial)
    );
}

// Usage:
const middlewares = [
    val => val * 2,
    val => new Promise(r => setTimeout(() => r(val + 3), 100))
];

// Question: 30. Web worker manager
```javascript
class WorkerManager {
    constructor(workerScript, poolSize = 4) {
        this.workers = Array(poolSize).fill().map(() => new Worker(workerScript));
        this.queue = [];
        this.workerStates = Array(poolSize).fill(true);
        
        this.workers.forEach((worker, i) => {
            worker.onmessage = () => {
                this.workerStates[i] = true;
                this.processNext();
            };
        });
    }

    postMessage(data) {
        return new Promise(resolve => {
            this.queue.push({ data, resolve });
            this.processNext();
        });
    }

    processNext() {
        const availableWorker = this.workerStates.findIndex(state => state);
        if (availableWorker === -1 || !this.queue.length) return;
        
        this.workerStates[availableWorker] = false;
        const { data, resolve } = this.queue.shift();
        this.workers[availableWorker].postMessage(data);
        this.workers[availableWorker].onmessage = e => resolve(e.data);
    }
}
