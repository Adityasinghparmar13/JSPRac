
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
