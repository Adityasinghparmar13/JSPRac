
// Question: 30. Sum of digits in number

// Convert number to string for processing
function sumDigits(num) {
    return String(num).split('').reduce(
        (sum, digit) => sum + Number(digit), 0
    );
}
console.log(sumDigits(123)); // 6

// Question: 28. Reverse array elements

// Manual array reversal
function reverseArray(arr) {
    const reversed = [];
    // Iterate from end to start
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1,2,3])); // [3,2,1]

// Question: 27. Capitalize first letter

// Capitalize first character
function capitalize(str) {
    // Handle empty string case
    return str.length > 0 
        ? str[0].toUpperCase() + str.slice(1) 
        : '';
}
console.log(capitalize('test')); // 'Test'
