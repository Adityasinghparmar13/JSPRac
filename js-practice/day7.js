
// Question: 27. Capitalize first letter

// Capitalize first character
function capitalize(str) {
    // Handle empty string case
    return str.length > 0 
        ? str[0].toUpperCase() + str.slice(1) 
        : '';
}
console.log(capitalize('test')); // 'Test'
