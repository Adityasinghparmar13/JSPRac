
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

// Question: 1. Implement debounce function
```javascript
// Returns a debounced version of the input function
function debounce(func, delay) {
    let timeoutId;
    // Closure preserves timeoutId between calls
    return (...args) => {
        // Clear previous pending execution
        clearTimeout(timeoutId); 
        // Schedule new execution
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage example:
const debouncedSearch = debounce((query) => {
    console.log(`Searching: ${query}`);
}, 300);

// Question: 60. Check power of two

// Bitwise power of two check
function isPowerOfTwo(n) {
    // Powers of two have single 1 bit
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true

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
