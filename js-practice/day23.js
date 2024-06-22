
// Question: 50. Lazy evaluator
```javascript
class Lazy {
    constructor() {
        this.chain = [];
    }

    add(fn, ...args) {
        this.chain.push(items => fn(...args, items));
        return this;
    }

    eval(target) {
        return this.chain.reduce(
            (acc, fn) => fn(acc),
            target
        );
    }
}

// Usage:
const processor = new Lazy()
    .add(arr => arr.map(x => x * 2))
    .add(arr => arr.filter(x => x > 5));

processor.eval([1, 2, 3]); // [6]

// Question: 51. Chain of Responsibility pattern
```javascript
class HandlerChain {
    constructor() {
        this.handlers = [];
    }

    addHandler(handler) {
        this.handlers.push(handler);
        return this;
    }

    execute(request) {
        for (const handler of this.handlers) {
            const result = handler(request);
            if (result !== undefined) return result;
        }
    }
}

// Usage:
const chain = new HandlerChain()
    .addHandler(req => req < 10 ? 'Handled by first' : null)
    .addHandler(req => req < 100 ? 'Handled by second' : null);
