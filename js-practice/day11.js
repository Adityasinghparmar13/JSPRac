
// Question: 42. Flatten nested arrays

// Recursive flattening using reduce
function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        // Handle nested arrays recursively
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}
console.log(flattenArray([1,[2,[3]]])); // [1,2,3]

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

// Question: 43. Check array equality

// Compare elements and length
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && 
        // Verify each element matches
        arr1.every((val, i) => val === arr2[i]);
}
console.log(arraysEqual([1,2], [1,2])); // true
