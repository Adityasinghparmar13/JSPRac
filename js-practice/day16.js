
// Question: 17. Binary tree in-order traversal
```javascript
function inOrderTraversal(root) {
    const stack = [];
    const result = [];
    let current = root;
    
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

// Question: 15. Flatten nested arrays (iterative)
```javascript
function flattenIterative(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        Array.isArray(next) 
            ? stack.push(...next) 
            : result.unshift(next);
    }
    return result;
}

// Question: 18. Rate limiter implementation
```javascript
class RateLimiter {
    constructor(limit, windowMs) {
        this.requests = new Map();
        this.limit = limit;
        this.windowMs = windowMs;
    }

    check(key) {
        const now = Date.now();
        const entry = this.requests.get(key) || { count: 0, timer: null };
        
        if (now - entry.start > this.windowMs) {
            entry.count = 0;
            entry.start = now;
        }

        if (entry.count >= this.limit) return false;
        
        entry.count++;
        this.requests.set(key, entry);
        return true;
    }
}
