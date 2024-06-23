
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

// Question: 58. Two-way data binding
```javascript
function createBinder(initial = {}) {
    const proxy = new Proxy(initial, {
        set(target, prop, value) {
            target[prop] = value;
            document.querySelectorAll(`[data-bind="${prop}"]`).forEach(el => {
                el.value = value;
            });
            return true;
        }
    });

    document.querySelectorAll('[data-bind]').forEach(el => {
        el.addEventListener('input', e => {
            proxy[e.target.dataset.bind] = e.target.value;
        });
    });

    return proxy;
}
