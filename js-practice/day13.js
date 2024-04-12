
// Question: 52. Sum of squares

// Square and sum using reduce
function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => 
        sum + (num * num), 0
    );
}
console.log(sumOfSquares([2, 3])); // 13
