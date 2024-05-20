
// Question: 22. Promise.allSettled polyfill
```javascript
function allSettled(promises) {
    return Promise.all(promises.map(p => 
        Promise.resolve(p).then(
            value => ({ status: 'fulfilled', value }),
            reason => ({ status: 'rejected', reason })
        )
    ));
}

// Usage:
allSettled([Promise.resolve(1), Promise.reject('error')]);

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

// Question: 21. Singleton pattern implementation
```javascript
class Singleton {
    static instance;
    
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        // Initialize singleton instance
        this.data = {};
        Singleton.instance = this;
    }
    
    static getInstance() {
        if (!Singleton.instance) new Singleton();
        return Singleton.instance;
    }
}

// Usage:
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

// Question: 23. Observer with Proxy
```javascript
function createObservable(target) {
    const observers = new Set();
    
    return new Proxy(target, {
        set(obj, prop, value) {
            // Notify observers on change
            const prev = obj[prop];
            obj[prop] = value;
            observers.forEach(fn => fn(prop, prev, value));
            return true;
        }
    });
}

// Usage:
const observable = createObservable({ count: 0 });
