
// Question: 17. Binary tree in-order traversal
```javascript
function inOrderTraversal(root) {
    const stack = [];
    const result = [];
    let current = root;
    
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

// Question: 15. Flatten nested arrays (iterative)
```javascript
function flattenIterative(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        Array.isArray(next) 
            ? stack.push(...next) 
            : result.unshift(next);
    }
    return result;
}
