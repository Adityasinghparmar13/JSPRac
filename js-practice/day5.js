
// Question: 18. Calculate rectangle area

// Basic geometry calculation
function rectangleArea(width, height) {
    // Multiply dimensions
    return width * height;
}
console.log(rectangleArea(5, 4)); // 20

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
