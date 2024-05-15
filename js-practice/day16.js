
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

// Question: 2. Deep clone objects/arrays
```javascript
// Recursive cloning for nested structures
function deepClone(obj) {
    // Handle primitives and null
    if (typeof obj !== 'object' || obj === null) return obj;
    
    // Create base clone
    const clone = Array.isArray(obj) ? [] : {};
    
    // Recursively copy properties
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Test case:
const original = { a: [1, { b: 2 }] };
const cloned = deepClone(original);
