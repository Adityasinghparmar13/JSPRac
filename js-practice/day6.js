
// Question: Spread Operator
let arr1 = [1,2]; let arr2 = [...arr1,3,4]; console.log(arr2);

// Question: Rest Parameters
function sum(...nums) { return nums.reduce((a,b) => a+b); }

// Question: Regular Expressions
let regex = /hello/i; console.log(regex.test('Hello World'));

// Question: Functional Programming
let add = x => y => x + y; console.log(add(2)(3));

// Question: Use Date object to get current year
console.log(new Date().getFullYear());

// Question: Generate random number between 1-100
console.log(Math.floor(Math.random() * 100) + 1);

// Question: Use map to square array elements
let nums = [1,2,3]; console.log(nums.map(n => n*n));

// Question: Filter even numbers from array
console.log(nums.filter(n => n%2 === 0));
