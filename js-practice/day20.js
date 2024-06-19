
// Question: 32. Reactive streams with operators
```javascript
class ObservableStream {
    constructor(source) {
        this.subscribers = [];
        source(this._emit.bind(this));
    }

    _emit(value) {
        this.subscribers.forEach(fn => fn(value));
    }

    pipe(...operators) {
        // Chain operators sequentially
        return operators.reduce((obs, op) => op(obs), this);
    }

    subscribe(fn) {
        this.subscribers.push(fn);
        return () => {
            this.subscribers = this.subscribers.filter(f => f !== fn);
        };
    }
}

// Operator example:
const map = f => source => new ObservableStream(emit => {
    source.subscribe(val => emit(f(val)));
};
