
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

// Question: 35. Convert array to string

// Join elements with custom separator
function arrayToString(arr, separator = ', ') {
    // Use array join method
    return arr.join(separator);
}
console.log(arrayToString(['a', 'b', 'c'], '-')); // 'a-b-c'

// Question: 36. Convert string to array of words

// Split on whitespace characters
function stringToWordArray(str) {
    // Use split with regex for multiple spaces
    return str.split(/\s+/);
}
console.log(stringToWordArray('Hello world JS')); // ['Hello', 'world', 'JS']

// Question: 31. FizzBuzz implementation

// Classic FizzBuzz logic with modulus
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        // Check divisibility rules
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i); // Default to number if empty
    }
}
fizzBuzz(5); // 1, 2, Fizz, 4, Buzz
