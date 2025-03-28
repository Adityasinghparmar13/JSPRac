
// Question: 32. Reactive streams with operators
```javascript
class ObservableStream {
    constructor(source) {
        this.subscribers = [];
        source(this._emit.bind(this));
    }

    _emit(value) {
        this.subscribers.forEach(fn => fn(value));
    }

    pipe(...operators) {
        // Chain operators sequentially
        return operators.reduce((obs, op) => op(obs), this);
    }

    subscribe(fn) {
        this.subscribers.push(fn);
        return () => {
            this.subscribers = this.subscribers.filter(f => f !== fn);
        };
    }
}

// Operator example:
const map = f => source => new ObservableStream(emit => {
    source.subscribe(val => emit(f(val)));
};

// Question: 35. Abortable timeout promise
```javascript
function abortableTimeout(delay) {
    const controller = new AbortController();
    const timeout = new Promise((_, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Timeout'));
        }, delay);
        controller.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Aborted'));
        });
    });
    return { timeout, abort: () => controller.abort() };
}

// Usage:
const { timeout, abort } = abortableTimeout(5000);
timeout.catch(console.error);

// Question: 34. Immutable list implementation
```javascript
class ImmutableList {
    constructor(items) {
        this._data = Object.freeze([...items]);
    }

    push(item) {
        // Return new instance with added item
        return new ImmutableList([...this._data, item]);
    }

    pop() {
        return new ImmutableList(this._data.slice(0, -1));
    }

    get items() {
        return [...this._data];
    }
}

// Question: 33. Async middleware chain with context
```javascript
async function middlewareChain(context, middlewares) {
    let index = 0;
    const next = async () => {
        if (index < middlewares.length) {
            return middlewares[index++](context, next);
        }
    };
    return next();
}

// Usage:
middlewareChain({}, [
    async (ctx, next) => {
        ctx.user = await fetchUser();
        await next();
    },
    async (ctx) => {
        console.log(ctx.user);
    }
]);

// Question: 37. Binary heap implementation
```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    extract() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown(0);
        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
}

// Question: 36. Dependency graph resolver
```javascript
function resolveDependencies(graph) {
    const resolved = [];
    const visiting = new Set();
    
    function visit(node) {
        if (resolved.includes(node)) return;
        if (visiting.has(node)) throw new Error('Cycle detected');
        
        visiting.add(node);
        graph[node].forEach(visit);
        visiting.delete(node);
        resolved.push(node);
    }
    
    Object.keys(graph).forEach(visit);
    return resolved;
}

// Test:
const graph = {
    a: ['b'], 
    b: ['c'], 
    c: []
};
console.log(resolveDependencies(graph)); // ['c', 'b', 'a']
