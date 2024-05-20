
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
