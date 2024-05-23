
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
