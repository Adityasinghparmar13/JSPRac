
// Question: JSON Parsing
let obj = JSON.parse('{"name": "John"}'); console.log(obj.name);

// Question: Fetch API
fetch('https://api.example.com').then(res => res.json()).then(data => console.log(data));

// Question: Promises
let promise = new Promise((resolve) => resolve('Done')); promise.then(console.log);

// Question: Async/Await
async function fetchData() { return await fetch('https://api.example.com'); }
