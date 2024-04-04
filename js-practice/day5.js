
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
