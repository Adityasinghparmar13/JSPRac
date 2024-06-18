
// Question: 28. Async middleware pipeline
```javascript
async function pipeline(middlewares, initial) {
    return middlewares.reduce(
        (acc, middleware) => acc.then(val => middleware(val)),
        Promise.resolve(initial)
    );
}

// Usage:
const middlewares = [
    val => val * 2,
    val => new Promise(r => setTimeout(() => r(val + 3), 100))
];
