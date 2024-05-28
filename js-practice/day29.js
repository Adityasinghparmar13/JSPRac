
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
