
// Question: 41. Count element occurrences

// Create frequency counter using reduce
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Increment count for each element
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
console.log(countOccurrences(['a','b','a','c'])); // {a:2, b:1, c:1}

// Question: 44. Capitalize each word

// Split and capitalize first letters
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        // Capitalize first letter + rest lowercase
        word[0].toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
console.log(capitalizeWords('hello world')); // 'Hello World'
