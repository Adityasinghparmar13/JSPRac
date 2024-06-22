
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
