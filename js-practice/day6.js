
// Question: 30. Sum of digits in number

// Convert number to string for processing
function sumDigits(num) {
    return String(num).split('').reduce(
        (sum, digit) => sum + Number(digit), 0
    );
}
console.log(sumDigits(123)); // 6
