
// Question: 56. Check uniform array

// Verify all elements are identical
function isUniform(arr) {
    // Compare each element to first
    return arr.every(val => val === arr[0]);
}
console.log(isUniform([2,2,2])); // true

// Question: 54. Format phone number

// Basic phone number formatting
function formatPhoneNumber(numbers) {
    // Join and insert formatting
    const str = numbers.join('');
    return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
}
console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0])); // (123) 456-7890

// Question: 53. Calculate days between dates

// Date difference calculation
function daysBetween(date1, date2) {
    // Convert milliseconds to days
    const diff = Math.abs(date2 - date1);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log(daysBetween(
    new Date('2023-01-01'), 
    new Date('2023-01-10')
)); // 9
