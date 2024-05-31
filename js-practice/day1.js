
// Question: 4. Find largest of three numbers
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findLargest(5, 9, 3)); // 9

// Question: 5. Calculate factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120

// Question: 1. Declare a variable and print it
// Declare variable using let keyword
let greeting = 'Hello, World!';
console.log(greeting);

// Question: 2. Add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8
