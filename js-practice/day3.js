
// Question: 12. Check leap year

// Leap year logic with multiple conditions
function isLeapYear(year) {
    // Divisible by 4 but not 100 unless also 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // true

// Question: 9. Calculate array sum
function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(arraySum([1, 2, 3, 4])); // 10
