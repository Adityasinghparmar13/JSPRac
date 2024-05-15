
// Question: 3. Memoize with cache expiration
```javascript
function memoize(fn, ttl = 300) {
    const cache = new Map();
    
    return (...args) => {
        const key = JSON.stringify(args);
        // Check cache validity
        if (cache.has(key)) {
            const { value, expires } = cache.get(key);
            if (Date.now() < expires) return value;
        }
        // Calculate and cache new value
        const result = fn(...args);
        cache.set(key, {
            value: result,
            expires: Date.now() + ttl
        });
        return result;
    };
}

// Usage:
const memoizedAdd = memoize((a, b) => a + b);
