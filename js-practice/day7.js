
// Question: 27. Capitalize first letter

// Capitalize first character
function capitalize(str) {
    // Handle empty string case
    return str.length > 0 
        ? str[0].toUpperCase() + str.slice(1) 
        : '';
}
console.log(capitalize('test')); // 'Test'

// Question: 28. Reverse array elements

// Manual array reversal
function reverseArray(arr) {
    const reversed = [];
    // Iterate from end to start
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1,2,3])); // [3,2,1]

// Question: 26. Check array inclusion

// Custom includes function
function arrayIncludes(arr, element) {
    // Use indexOf check
    return arr.indexOf(element) !== -1;
}
console.log(arrayIncludes([1,2,3], 2)); // true

// Question: 25. Remove duplicates from array

// Using Set for unique values
function removeDuplicates(arr) {
    // Convert Set back to array
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3])); // [1,2,3]
