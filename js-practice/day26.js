
// Question: 44. Mixin pattern implementation
```javascript
const LoggerMixin = Base => class extends Base {
    log(message) {
        console.log(`[${new Date().toISOString()}] ${message}`);
    }
};

class Service {
    constructor() {
        LoggerMixin(this.constructor);
    }
}

// Usage:
const service = new Service();
service.log('Initialized'); // Timestamped message

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
