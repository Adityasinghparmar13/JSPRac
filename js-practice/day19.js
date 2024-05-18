
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

// Question: 16. Pub-Sub pattern implementation
```javascript
class PubSub {
    constructor() {
        this.subscribers = {};
    }

    subscribe(topic, callback) {
        (this.subscribers[topic] || (this.subscribers[topic] = [])).push(callback);
    }

    publish(topic, data) {
        (this.subscribers[topic] || []).forEach(fn => fn(data));
    }

    unsubscribe(topic, callback) {
        this.subscribers[topic] = (this.subscribers[topic] || []).filter(fn => fn !== callback);
    }
}

// Question: 13. Compose middleware functions
```javascript
function compose(middlewares) {
    return (context, next) => {
        let index = -1;
        const dispatch = (i) => {
            if (i <= index) return Promise.reject();
            index = i;
            let fn = middlewares[i] || next;
            if (!fn) return Promise.resolve();
            try {
                return Promise.resolve(
                    fn(context, () => dispatch(i + 1))
                );
            } catch (err) {
                return Promise.reject(err);
            }
        };
        return dispatch(0);
    };
}
