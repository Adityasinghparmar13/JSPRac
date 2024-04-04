
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

// Question: 19. Check string length

// Compare length against limit
function checkStringLength(str, max) {
    // Return boolean comparison
    return str.length <= max;
}
console.log(checkStringLength('hello', 5)); // true

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
