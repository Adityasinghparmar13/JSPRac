
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
