
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
