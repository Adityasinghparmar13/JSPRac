
// Question: 31. FizzBuzz implementation

// Classic FizzBuzz logic with modulus
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        // Check divisibility rules
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i); // Default to number if empty
    }
}
fizzBuzz(5); // 1, 2, Fizz, 4, Buzz

// Question: 29. Merge two arrays

// Concatenate arrays without duplicates
function mergeArrays(arr1, arr2) {
    // Combine and filter duplicates
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeArrays([1,2], [2,3])); // [1,2,3]

// Question: 32. Calculate array average

// Using reduce for sum calculation
function arrayAverage(arr) {
    // Sum elements and divide by length
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(arrayAverage([4, 2, 8, 6])); // 5

// Question: 30. Sum of digits in number

// Convert number to string for processing
function sumDigits(num) {
    return String(num).split('').reduce(
        (sum, digit) => sum + Number(digit), 0
    );
}
console.log(sumDigits(123)); // 6
