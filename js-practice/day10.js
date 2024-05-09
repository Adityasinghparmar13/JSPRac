
// Question: 37. Check if all array elements satisfy condition

// Using array every method
function allPositive(numbers) {
    // Test all elements > 0
    return numbers.every(num => num > 0);
}
console.log(allPositive([5, 3, 8])); // true
