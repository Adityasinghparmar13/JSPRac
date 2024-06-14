
// Question: 14. Event Emitter class
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        (this.events[event] || (this.events[event] = [])).push(listener);
        return () => this.off(event, listener);
    }

    off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(fn => fn !== listener);
    }

    emit(event, ...args) {
        (this.events[event] || []).forEach(fn => fn(...args));
    }
}

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
