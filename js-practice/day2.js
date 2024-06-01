
// Question: 10. Find array maximum
function findArrayMax(arr) {
    return Math.max(...arr);
}
console.log(findArrayMax([5, 2, 9, 1])); // 9

// Question: 9. Calculate array sum
function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(arraySum([1, 2, 3, 4])); // 10

// Question: 11. Celsius to Fahrenheit conversion

// Conversion formula implementation
function celsiusToFahrenheit(c) {
    // (C × 9/5) + 32
    return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25)); // 77

// Question: 7. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // 'olleh'

// Question: 6. Check prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
