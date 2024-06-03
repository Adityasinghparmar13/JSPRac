
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
