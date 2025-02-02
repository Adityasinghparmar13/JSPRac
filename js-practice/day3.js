
// Question: 9. Calculate array sum
function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(arraySum([1, 2, 3, 4])); // 10

// Question: 10. Find array maximum
function findArrayMax(arr) {
    return Math.max(...arr);
}
console.log(findArrayMax([5, 2, 9, 1])); // 9

// Question: 11. Celsius to Fahrenheit conversion
```javascript
// Conversion formula implementation
function celsiusToFahrenheit(c) {
    // (C × 9/5) + 32
    return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25)); // 77
