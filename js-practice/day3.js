
// Question: 13. Simple interest calculator

// Mathematical formula implementation
function simpleInterest(p, r, t) {
    // SI = (P × R × T)/100
    return (p * r * t) / 100;
}
console.log(simpleInterest(1000, 5, 2)); // 100

// Question: 14. Check for vowel character

// Case-insensitive vowel check
function isVowel(char) {
    // Convert to lowercase and check inclusion
    return ['a','e','i','o','u'].includes(char.toLowerCase());
}
console.log(isVowel('E')); // true

// Question: 12. Check leap year

// Leap year logic with multiple conditions
function isLeapYear(year) {
    // Divisible by 4 but not 100 unless also 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // true

// Question: 15. Generate multiplication table

// Loop-based table generation
function multiplicationTable(num) {
    // Iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}
multiplicationTable(5); // Prints 5's table
