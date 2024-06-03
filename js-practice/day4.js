
// Question: 16. Fibonacci sequence generator

// Iterative Fibonacci implementation
function fibonacci(n) {
    // Initialize sequence array
    const seq = [0, 1];
    // Add previous two numbers
    for (let i = 2; i < n; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
    return seq.slice(0, n);
}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

// Question: 20. Count string occurrences

// Count specific character in string
function countOccurrences(str, char) {
    let count = 0;
    // Iterate through characters
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}
console.log(countOccurrences('programming', 'm')); // 2

// Question: 18. Calculate rectangle area

// Basic geometry calculation
function rectangleArea(width, height) {
    // Multiply dimensions
    return width * height;
}
console.log(rectangleArea(5, 4)); // 20
