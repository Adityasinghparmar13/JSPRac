
// Question: 38. Observable async iterator
```javascript
function createAsyncIterable() {
    const queue = [];
    let resolveNext;
    
    return {
        async *[Symbol.asyncIterator]() {
            while (true) {
                if (queue.length) yield queue.shift();
                else await new Promise(r => resolveNext = r);
            }
        },
        push(value) {
            queue.push(value);
            if (resolveNext) {
                resolveNext();
                resolveNext = null;
            }
        }
    };
}

// Usage:
const asyncIterable = createAsyncIterable();
