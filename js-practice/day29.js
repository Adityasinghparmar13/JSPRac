
// Question: 56. Dynamic promise pool
```javascript
class PromisePool {
    constructor(initialConcurrency = 4) {
        this.concurrency = initialConcurrency;
        this.queue = [];
        this.active = 0;
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.run();
        });
    }

    run() {
        while (this.active < this.concurrency && this.queue.length) {
            const { task, resolve, reject } = this.queue.shift();
            this.active++;
            task().then(resolve, reject).finally(() => {
                this.active--;
                this.run();
            });
        }
    }

    setConcurrency(newConcurrency) {
        this.concurrency = newConcurrency;
        this.run();
    }
}

// Question: 54. Concurrent task queue with pause
```javascript
class ConcurrentQueue {
    constructor(concurrency = 4) {
        this.pending = [];
        this.running = 0;
        this.concurrency = concurrency;
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.pending.push({ task, resolve, reject });
            this.next();
        });
    }

    next() {
        while (this.running < this.concurrency && this.pending.length) {
            const { task, resolve, reject } = this.pending.shift();
            this.running++;
            task().then(resolve, reject).finally(() => {
                this.running--;
                this.next();
            });
        }
    }
}

// Question: 53. WebSocket reconnection manager
```javascript
class WSReconnect {
    constructor(url, { maxRetries = 5, backoff = 1000 } = {}) {
        this.url = url;
        this.retries = 0;
        this.backoff = backoff;
        this.maxRetries = maxRetries;
        this.connect();
    }

    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onclose = () => {
            if (this.retries++ < this.maxRetries) {
                setTimeout(() => this.connect(), this.backoff * this.retries);
            }
        };
    }
}

// Question: 55. Deep merge objects
```javascript
function deepMerge(target, source) {
    const output = { ...target };
    for (const key of Object.keys(source)) {
        if (isObject(source[key]) && isObject(target[key])) {
            output[key] = deepMerge(target[key], source[key]);
        } else {
            output[key] = source[key];
        }
    }
    return output;
}

function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
