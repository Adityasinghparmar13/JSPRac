
// Question: 10. Find array maximum
function findArrayMax(arr) {
    return Math.max(...arr);
}
console.log(findArrayMax([5, 2, 9, 1])); // 9

// Question: 9. Calculate array sum
function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(arraySum([1, 2, 3, 4])); // 10
