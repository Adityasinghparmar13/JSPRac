
// Question: 34. Extract object keys as array

// Using Object.keys method
function getObjectKeys(obj) {
    // Return array of own property keys
    return Object.keys(obj);
}
console.log(getObjectKeys({name: 'John', age: 30})); // ['name', 'age']

// Question: 32. Calculate array average

// Using reduce for sum calculation
function arrayAverage(arr) {
    // Sum elements and divide by length
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(arrayAverage([4, 2, 8, 6])); // 5

// Question: 33. Check if object is empty

// Check object key count
function isEmpty(obj) {
    // Convert keys to array and check length
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({})); // true
