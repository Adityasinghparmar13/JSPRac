
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
