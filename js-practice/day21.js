
// Question: 41. Custom async iterator
```javascript
class AsyncRange {
    constructor(start, end, delay = 100) {
        this.start = start;
        this.end = end;
        this.delay = delay;
    }

    [Symbol.asyncIterator]() {
        return {
            current: this.start,
            last: this.end,
            async next() {
                await new Promise(resolve => 
                    setTimeout(resolve, this.delay)
                );
                
                return this.current <= this.last 
                    ? { done: false, value: this.current++ }
                    : { done: true };
            }
        };
    }
}

// Usage:
(async () => {
    for await (let num of new AsyncRange(1, 5)) {
        console.log(num); // Logs 1-5 with 100ms delay
    }
})();

// Question: 39. Memento pattern for undo/redo
```javascript
class HistoryManager {
    constructor() {
        this.states = [];
        this.position = -1;
    }

    push(state) {
        // Clear redo states when pushing new state
        this.states.splice(this.position + 1);
        this.states.push(JSON.stringify(state));
        this.position = this.states.length - 1;
    }

    undo() {
        return this.position > 0 
            ? JSON.parse(this.states[--this.position])
            : null;
    }

    redo() {
        return this.position < this.states.length - 1 
            ? JSON.parse(this.states[++this.position])
            : null;
    }
}

// Question: 40. Concurrent promise batcher
```javascript
async function batchPromises(items, processFn, batchSize = 10) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        results.push(...await Promise.all(
            batch.map(item => processFn(item))
        ));
    }
    return results;
}

// Usage:
batchPromises(urls, fetchUrl, 5);

// Question: 43. Template string parser
```javascript
function parseTemplate(str, data) {
    return str.replace(/\${(.*?)}/g, (match, key) => {
        return data[key.trim()] || '';
    });
}

// Usage:
parseTemplate('Hello ${name}!', { name: 'Alice' }); // 'Hello Alice!'

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

// Question: 42. Memoization with WeakMap
```javascript
function weakMemoize(fn) {
    const cache = new WeakMap();
    return (obj) => {
        if (!cache.has(obj)) {
            cache.set(obj, fn(obj));
        }
        return cache.get(obj);
    };
}

// Usage:
const memoizedObjProcessor = weakMemoize(obj => {
    return Object.keys(obj).join(',');
});
