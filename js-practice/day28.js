
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

// Question: 49. Command pattern with undo
```javascript
class CommandManager {
    constructor() {
        this.history = [];
        this.position = -1;
    }

    execute(command) {
        command.execute();
        this.history = this.history.slice(0, this.position + 1);
        this.history.push(command);
        this.position++;
    }

    undo() {
        if (this.position >= 0) {
            this.history[this.position--].undo();
        }
    }

    redo() {
        if (this.position < this.history.length - 1) {
            this.history[++this.position].execute();
        }
    }
}
