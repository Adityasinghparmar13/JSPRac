
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
