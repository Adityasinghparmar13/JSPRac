
// Question: 43. Check array equality

// Compare elements and length
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && 
        // Verify each element matches
        arr1.every((val, i) => val === arr2[i]);
}
console.log(arraysEqual([1,2], [1,2])); // true

// Question: 42. Flatten nested arrays

// Recursive flattening using reduce
function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        // Handle nested arrays recursively
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}
console.log(flattenArray([1,[2,[3]]])); // [1,2,3]
