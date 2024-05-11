
// Question: 46. Random number in range

// Generate random integer between min-max
function randomInRange(min, max) {
    // Scale and shift Math.random output
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 10)); // Random integer 5-10

// Question: 47. Check integer

// Verify number is integer
function isInteger(num) {
    // Compare with rounded value
    return num === Math.floor(num);
}
console.log(isInteger(5.0)); // true

// Question: 45. Calculate BMI

// BMI formula implementation
function calculateBMI(weight, height) {
    // Convert height to meters squared
    return weight / (height ** 2);
}
console.log(calculateBMI(70, 1.75).toFixed(1)); // 22.9

// Question: 48. Truncate string with ellipsis

// Limit string length with truncation
function truncateString(str, maxLength) {
    // Add ellipsis if truncated
    return str.length > maxLength 
        ? str.slice(0, maxLength) + '...' 
        : str;
}
console.log(truncateString('Long text here', 8)); // 'Long tex...'
