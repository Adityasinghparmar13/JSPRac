
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
