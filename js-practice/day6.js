
// Question: Spread Operator
let arr1 = [1,2]; let arr2 = [...arr1,3,4]; console.log(arr2);

// Question: Rest Parameters
function sum(...nums) { return nums.reduce((a,b) => a+b); }
