
// Question: 56. Check uniform array

// Verify all elements are identical
function isUniform(arr) {
    // Compare each element to first
    return arr.every(val => val === arr[0]);
}
console.log(isUniform([2,2,2])); // true

// Question: 59. Generate random hex color

// Create 6-digit hex color
function randomHexColor() {
    // Generate random number and pad to 6 digits
    return '#' + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0');
}
console.log(randomHexColor()); // #a1b2c3

// Question: 58. Validate URL format

// Basic URL validation with regex
function isValidURL(url) {
    // Check URL pattern
    const pattern = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
    return pattern.test(url);
}
console.log(isValidURL('https://example.com')); // true

// Question: 57. Count words in string

// Word count using split
function countWords(str) {
    // Split on whitespace and count
    return str.trim().split(/\s+/).length;
}
console.log(countWords('Hello world')); // 2
