
// Question: 51. Sort array of numbers

// Ascending sort with compare function
function sortNumbers(arr) {
    // Numeric sort using subtraction
    return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([3, 1, 4, 2])); // [1, 2, 3, 4]
