
// Question: 5. Currying function implementation
```javascript
// Converts function to curried version
function curry(fn) {
    return function curried(...args) {
        // Check if all arguments are provided
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            // Return partial application
            return (...args2) => curried.apply(this, args.concat(args2));
        }
    };
}

// Example usage:
const curriedAdd = curry((a, b) => a + b);
const addFive = curriedAdd(5);
