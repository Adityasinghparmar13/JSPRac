
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
