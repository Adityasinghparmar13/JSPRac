
// Question: 11. Promise retry with backoff
```javascript
function retryWithBackoff(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (attemptCount) => {
            fn().then(resolve)
                .catch((err) => {
                    if (attemptCount >= retries) return reject(err);
                    // Exponential backoff delay
                    setTimeout(() => attempt(attemptCount + 1), delay * Math.pow(2, attemptCount));
                });
        };
        attempt(0);
    });
}

// Usage: 
retryWithBackoff(fetchData, 3);

// Question: 10. Deep object comparison
```javascript
// Recursive deep equality check
function deepEqual(a, b) {
    // Primitive comparison
    if (a === b) return true;
    
    // Type check
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }
    
    // Compare keys
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    
    // Recursive property comparison
    return keysA.every(key => 
        keysB.includes(key) && deepEqual(a[key], b[key])
    );
}

// Test case:
console.log(deepEqual({ a: [1,2] }, { a: [1,2] })); // true

// Question: 12. LRU Cache implementation
```javascript
class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        // Refresh key as most recently used
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        // Evict least recently used if over capacity
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}
