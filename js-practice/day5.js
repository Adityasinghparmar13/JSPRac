
// Question: 17. Sum of even numbers in range

// Accumulate even numbers between start-end
function sumEvenInRange(start, end) {
    let sum = 0;
    // Iterate through range
    for (let i = start; i <= end; i++) {
        // Check evenness
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenInRange(1, 10)); // 30

// Question: 18. Calculate rectangle area

// Basic geometry calculation
function rectangleArea(width, height) {
    // Multiply dimensions
    return width * height;
}
console.log(rectangleArea(5, 4)); // 20
