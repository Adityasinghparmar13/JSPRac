
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

// Question: 49. Check anagrams

// Compare sorted character arrays
function areAnagrams(str1, str2) {
    // Normalize and sort characters
    const normalize = s => s.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams('listen', 'silent')); // true

// Question: 47. Check integer

// Verify number is integer
function isInteger(num) {
    // Compare with rounded value
    return num === Math.floor(num);
}
console.log(isInteger(5.0)); // true

// Question: 46. Random number in range

// Generate random integer between min-max
function randomInRange(min, max) {
    // Scale and shift Math.random output
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 10)); // Random integer 5-10

// Question: 50. Find longest word

// Split and reduce to find maximum
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => 
        // Compare word lengths
        word.length > longest.length ? word : longest
    , '');
}
console.log(longestWord('The quick brown fox')); // 'quick'
