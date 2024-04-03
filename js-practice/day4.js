
// Question: 13. Simple interest calculator

// Mathematical formula implementation
function simpleInterest(p, r, t) {
    // SI = (P × R × T)/100
    return (p * r * t) / 100;
}
console.log(simpleInterest(1000, 5, 2)); // 100

// Question: 14. Check for vowel character

// Case-insensitive vowel check
function isVowel(char) {
    // Convert to lowercase and check inclusion
    return ['a','e','i','o','u'].includes(char.toLowerCase());
}
console.log(isVowel('E')); // true

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

// Question: 15. Generate multiplication table

// Loop-based table generation
function multiplicationTable(num) {
    // Iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}
multiplicationTable(5); // Prints 5's table
