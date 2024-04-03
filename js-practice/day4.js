
// Question: JSON Parsing
let obj = JSON.parse('{"name": "John"}'); console.log(obj.name);

// Question: Fetch API
fetch('https://api.example.com').then(res => res.json()).then(data => console.log(data));

// Question: Promises
let promise = new Promise((resolve) => resolve('Done')); promise.then(console.log);

// Question: Async/Await
async function fetchData() { return await fetch('https://api.example.com'); }

// Question: ES6 Modules
import { add } from './math.js'; console.log(add(2, 3));

// Question: Create an object with name and age properties
let person = { name: 'John', age: 30 };

// Question: Access nested object property
let data = { user: { id: 1 } }; console.log(data.user.id);

// Question: Merge two arrays using concat
let arr1 = [1,2]; let arr2 = [3,4]; console.log(arr1.concat(arr2));

// Question: Reverse a string
let str = 'hello'; console.log(str.split('').reverse().join(''));

// Question: Reverse a string
let str = 'hello'; console.log(str.split('').reverse().join(''));
