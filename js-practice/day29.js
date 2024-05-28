
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
