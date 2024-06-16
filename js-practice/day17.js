
// Question: 19. Generate array permutations
```javascript
function permutations(arr) {
    const result = [];
    
    function permute(start) {
        if (start >= arr.length) {
            result.push([...arr]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            permute(start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
    
    permute(0);
    return result;
}

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

// Question: 20. Scheduler with delayed tasks
```javascript
class Scheduler {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    add(task, delay) {
        return new Promise(resolve => {
            this.queue.push({ task, delay, resolve });
            if (!this.isProcessing) this.process();
        });
    }

    async process() {
        this.isProcessing = true;
        while (this.queue.length) {
            const { task, delay, resolve } = this.queue.shift();
            await new Promise(r => setTimeout(r, delay));
            resolve(await task());
        }
        this.isProcessing = false;
    }
}
