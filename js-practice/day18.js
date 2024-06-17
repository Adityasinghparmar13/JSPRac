
// Question: 26. Circular buffer implementation
```javascript
class CircularBuffer {
    constructor(capacity) {
        this.buffer = new Array(capacity);
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    push(item) {
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.buffer.length;
        this.size = Math.min(this.size + 1, this.buffer.length);
    }

    pop() {
        if (this.size === 0) return null;
        const item = this.buffer[this.head];
        this.head = (this.head + 1) % this.buffer.length;
        this.size--;
        return item;
    }
}

// Question: 24. Dependency injection container
```javascript
class Container {
    constructor() {
        this.services = new Map();
    }
    
    register(name, factory) {
        this.services.set(name, { factory, instance: null });
    }
    
    get(name) {
        const service = this.services.get(name);
        if (!service.instance) {
            service.instance = service.factory(this);
        }
        return service.instance;
    }
}

// Usage:
const container = new Container();
container.register('api', c => new ApiService());
