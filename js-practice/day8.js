
// Question: 39. Find index of element in array

// Custom indexOf implementation
function findIndex(arr, element) {
    // Loop through array elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return i;
    }
    return -1;
}
console.log(findIndex(['a', 'b', 'c'], 'b')); // 1

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
