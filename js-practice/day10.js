
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
