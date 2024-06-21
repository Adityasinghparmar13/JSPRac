
// Question: 45. Validation framework
```javascript
class Validator {
    constructor() {
        this.rules = [];
    }

    add(fn, message) {
        this.rules.push({ fn, message });
        return this;
    }

    validate(value) {
        return this.rules
            .filter(rule => !rule.fn(value))
            .map(rule => rule.message);
    }

    static required() {
        return value => !!value;
    }
}

// Usage:
const emailValidator = new Validator()
    .add(Validator.required(), 'Email is required')
    .add(v => v.includes('@'), 'Invalid email');

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

// Question: 47. Priority promise queue
```javascript
class PriorityPromiseQueue {
    constructor() {
        this.queue = [];
    }

    add(task, priority = 0) {
        this.queue.push({ task, priority });
        this.queue.sort((a, b) => b.priority - a.priority);
    }

    async run() {
        while (this.queue.length) {
            const { task } = this.queue.shift();
            await task();
        }
    }
}

// Question: 48. Observable properties
```javascript
function observe(obj, prop, callback) {
    let value = obj[prop];
    
    Object.defineProperty(obj, prop, {
        get() { return value; },
        set(newVal) {
            const oldVal = value;
            value = newVal;
            callback(newVal, oldVal);
        }
    });
}

// Usage:
const user = { name: 'Alice' };
observe(user, 'name', (newVal, oldVal) => {
    console.log(`Name changed from ${oldVal} to ${newVal}`);
});

// Question: 46. Virtual proxy pattern
```javascript
class ImageProxy {
    constructor(url) {
        this.url = url;
        this.realImage = null;
    }

    load() {
        if (!this.realImage) {
            this.realImage = new Image();
            this.realImage.src = this.url;
        }
        return this.realImage;
    }
}

// Usage:
const proxy = new ImageProxy('large-image.jpg');
document.body.appendChild(proxy.load());
