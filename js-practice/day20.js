
// Question: 20. Scheduler with delayed tasks
```javascript
class Scheduler {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    add(task, delay) {
        return new Promise(resolve => {
            this.queue.push({ task, delay, resolve });
            if (!this.isProcessing) this.process();
        });
    }

    async process() {
        this.isProcessing = true;
        while (this.queue.length) {
            const { task, delay, resolve } = this.queue.shift();
            await new Promise(r => setTimeout(r, delay));
            resolve(await task());
        }
        this.isProcessing = false;
    }
}

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

// Question: 19. Generate array permutations
```javascript
function permutations(arr) {
    const result = [];
    
    function permute(start) {
        if (start >= arr.length) {
            result.push([...arr]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            permute(start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
    
    permute(0);
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
