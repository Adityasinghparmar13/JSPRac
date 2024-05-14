
// Question: 57. Count words in string

// Word count using split
function countWords(str) {
    // Split on whitespace and count
    return str.trim().split(/\s+/).length;
}
console.log(countWords('Hello world')); // 2

// Question: 60. Check power of two

// Bitwise power of two check
function isPowerOfTwo(n) {
    // Powers of two have single 1 bit
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true
