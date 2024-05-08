
// Question: 33. Check if object is empty

// Check object key count
function isEmpty(obj) {
    // Convert keys to array and check length
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({})); // true

// Question: 35. Convert array to string

// Join elements with custom separator
function arrayToString(arr, separator = ', ') {
    // Use array join method
    return arr.join(separator);
}
console.log(arrayToString(['a', 'b', 'c'], '-')); // 'a-b-c'

// Question: 34. Extract object keys as array

// Using Object.keys method
function getObjectKeys(obj) {
    // Return array of own property keys
    return Object.keys(obj);
}
console.log(getObjectKeys({name: 'John', age: 30})); // ['name', 'age']
