
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
