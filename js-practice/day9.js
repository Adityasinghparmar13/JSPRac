
// Question: 33. Check if object is empty

// Check object key count
function isEmpty(obj) {
    // Convert keys to array and check length
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({})); // true
