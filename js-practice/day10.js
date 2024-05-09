
// Question: 37. Check if all array elements satisfy condition

// Using array every method
function allPositive(numbers) {
    // Test all elements > 0
    return numbers.every(num => num > 0);
}
console.log(allPositive([5, 3, 8])); // true

// Question: 40. Remove falsy values from array

// Filter out falsy values
function compactArray(arr) {
    // Use Boolean constructor as filter
    return arr.filter(Boolean);
}
console.log(compactArray([0, 1, false, '', 3])); // [1, 3]

// Question: 38. Filter array elements

// Custom filter for even numbers
function filterEvens(numbers) {
    // Return new array with even numbers
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4])); // [2, 4]

// Question: 39. Find index of element in array

// Custom indexOf implementation
function findIndex(arr, element) {
    // Loop through array elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return i;
    }
    return -1;
}
console.log(findIndex(['a', 'b', 'c'], 'b')); // 1
