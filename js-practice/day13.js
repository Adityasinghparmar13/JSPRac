
// Question: 52. Sum of squares

// Square and sum using reduce
function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => 
        sum + (num * num), 0
    );
}
console.log(sumOfSquares([2, 3])); // 13

// Question: 50. Find longest word

// Split and reduce to find maximum
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => 
        // Compare word lengths
        word.length > longest.length ? word : longest
    , '');
}
console.log(longestWord('The quick brown fox')); // 'quick'
