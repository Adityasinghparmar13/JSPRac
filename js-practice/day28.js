
// Question: 52. Tree data structure implementation
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    traverseDFS(cb) {
        cb(this.value);
        this.children.forEach(child => child.traverseDFS(cb));
    }

    traverseBFS(cb) {
        const queue = [this];
        while (queue.length) {
            const node = queue.shift();
            cb(node.value);
            queue.push(...node.children);
        }
    }
}

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
