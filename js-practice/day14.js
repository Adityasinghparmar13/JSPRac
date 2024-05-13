
// Question: 56. Check uniform array

// Verify all elements are identical
function isUniform(arr) {
    // Compare each element to first
    return arr.every(val => val === arr[0]);
}
console.log(isUniform([2,2,2])); // true
