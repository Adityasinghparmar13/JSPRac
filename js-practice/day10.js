
// Question: 51. Sort array of numbers

// Ascending sort with compare function
function sortNumbers(arr) {
    // Numeric sort using subtraction
    return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([3, 1, 4, 2])); // [1, 2, 3, 4]

// Question: 48. Truncate string with ellipsis

// Limit string length with truncation
function truncateString(str, maxLength) {
    // Add ellipsis if truncated
    return str.length > maxLength 
        ? str.slice(0, maxLength) + '...' 
        : str;
}
console.log(truncateString('Long text here', 8)); // 'Long tex...'
