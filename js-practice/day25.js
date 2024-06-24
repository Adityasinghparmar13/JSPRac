
// Question: 60. Priority event dispatcher
```javascript
class PriorityEventDispatcher {
    constructor() {
        this.listeners = new Map();
    }

    on(event, handler, priority = 0) {
        const handlers = this.listeners.get(event) || [];
        handlers.push({ handler, priority });
        handlers.sort((a, b) => b.priority - a.priority);
        this.listeners.set(event, handlers);
    }

    emit(event, ...args) {
        const handlers = this.listeners.get(event) || [];
        handlers.forEach(({ handler }) => handler(...args));
    }
}
