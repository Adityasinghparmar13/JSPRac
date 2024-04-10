
// Question: 42. Flatten nested arrays

// Recursive flattening using reduce
function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        // Handle nested arrays recursively
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}
console.log(flattenArray([1,[2,[3]]])); // [1,2,3]
