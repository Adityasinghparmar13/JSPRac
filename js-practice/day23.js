
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

// Question: 30. Web worker manager
```javascript
class WorkerManager {
    constructor(workerScript, poolSize = 4) {
        this.workers = Array(poolSize).fill().map(() => new Worker(workerScript));
        this.queue = [];
        this.workerStates = Array(poolSize).fill(true);
        
        this.workers.forEach((worker, i) => {
            worker.onmessage = () => {
                this.workerStates[i] = true;
                this.processNext();
            };
        });
    }

    postMessage(data) {
        return new Promise(resolve => {
            this.queue.push({ data, resolve });
            this.processNext();
        });
    }

    processNext() {
        const availableWorker = this.workerStates.findIndex(state => state);
        if (availableWorker === -1 || !this.queue.length) return;
        
        this.workerStates[availableWorker] = false;
        const { data, resolve } = this.queue.shift();
        this.workers[availableWorker].postMessage(data);
        this.workers[availableWorker].onmessage = e => resolve(e.data);
    }
}

// Question: 31. Finite state machine implementation
```javascript
class StateMachine {
    constructor(initial) {
        this.state = initial;
        this.transitions = {};
    }
    
    addTransition(from, to, condition) {
        // Store transition rules {fromState: {condition: toState}}
        this.transitions[from] = this.transitions[from] || {};
        this.transitions[from][condition] = to;
    }

    dispatch(condition) {
        // Validate and execute state transition
        const next = this.transitions[this.state]?.[condition];
        if (next) this.state = next;
        return this.state;
    }
}

// Usage:
const fsm = new StateMachine('idle');
fsm.addTransition('idle', 'fetching', 'FETCH');
