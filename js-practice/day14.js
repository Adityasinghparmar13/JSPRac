
// Question: 7. Observable pattern implementation
```javascript
// Basic observer pattern implementation
class Observable {
    constructor() {
        this.subscribers = new Set();
    }

    subscribe(fn) {
        this.subscribers.add(fn);
        return () => this.unsubscribe(fn);
    }

    unsubscribe(fn) {
        this.subscribers.delete(fn);
    }

    notify(data) {
        // Notify all subscribers
        this.subscribers.forEach(fn => fn(data));
    }
}

// Usage:
const observable = new Observable();
const unsubscribe = observable.subscribe(console.log);

// Question: 6. Async task queue with concurrency
```javascript
class AsyncQueue {
    constructor(concurrency = 1) {
        this.pending = [];
        this.inProgress = 0;
        this.concurrency = concurrency;
    }

    add(task) {
        return new Promise((resolve, reject) => {
            // Add task to queue with wrapper
            this.pending.push({ task, resolve, reject });
            this._next();
        });
    }

    _next() {
        // Process next task if capacity allows
        while (this.inProgress < this.concurrency && this.pending.length) {
            const { task, resolve, reject } = this.pending.shift();
            this.inProgress++;
            task().then(resolve, reject).finally(() => {
                this.inProgress--;
                this._next();
            });
        }
    }
}

// Usage example:
const queue = new AsyncQueue(2);
