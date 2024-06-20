
// Question: 41. Custom async iterator
```javascript
class AsyncRange {
    constructor(start, end, delay = 100) {
        this.start = start;
        this.end = end;
        this.delay = delay;
    }

    [Symbol.asyncIterator]() {
        return {
            current: this.start,
            last: this.end,
            async next() {
                await new Promise(resolve => 
                    setTimeout(resolve, this.delay)
                );
                
                return this.current <= this.last 
                    ? { done: false, value: this.current++ }
                    : { done: true };
            }
        };
    }
}

// Usage:
(async () => {
    for await (let num of new AsyncRange(1, 5)) {
        console.log(num); // Logs 1-5 with 100ms delay
    }
})();

// Question: 39. Memento pattern for undo/redo
```javascript
class HistoryManager {
    constructor() {
        this.states = [];
        this.position = -1;
    }

    push(state) {
        // Clear redo states when pushing new state
        this.states.splice(this.position + 1);
        this.states.push(JSON.stringify(state));
        this.position = this.states.length - 1;
    }

    undo() {
        return this.position > 0 
            ? JSON.parse(this.states[--this.position])
            : null;
    }

    redo() {
        return this.position < this.states.length - 1 
            ? JSON.parse(this.states[++this.position])
            : null;
    }
}
