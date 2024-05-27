
// Question: 52. Tree data structure implementation
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    traverseDFS(cb) {
        cb(this.value);
        this.children.forEach(child => child.traverseDFS(cb));
    }

    traverseBFS(cb) {
        const queue = [this];
        while (queue.length) {
            const node = queue.shift();
            cb(node.value);
            queue.push(...node.children);
        }
    }
}
