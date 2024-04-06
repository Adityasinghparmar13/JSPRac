
// Question: WebSockets
let ws = new WebSocket('ws://example.com'); ws.onmessage = event => console.log(event.data);

// Question: Node.js File System
const fs = require('fs'); fs.writeFileSync('test.txt', 'Hello');

// Question: Express.js Routing
const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello'));

// Question: Performance Optimization
console.time('test'); for(let i=0; i<1000000; i++){} console.timeEnd('test');

// Question: Create a Set from array
let unique = new Set([1,1,2,3]); console.log([...unique]);

// Question: Convert string to uppercase
console.log('hello'.toUpperCase());

// Question: Create a Map with key-value pairs

    let map = new Map();
    map.set('name', 'Alice');
    console.log(map.get('name'));

// Question: Check if object has property
console.log('name' in person);

// Question: Destructure array elements
let [first, second] = [1,2,3]; console.log(first);

// Question: Check if object has property
console.log('name' in person);

// Question: Create a Map with key-value pairs

    let map = new Map();
    map.set('name', 'Alice');
    console.log(map.get('name'));

// Question: Create a Set from array
let unique = new Set([1,1,2,3]); console.log([...unique]);

// Question: Convert string to uppercase
console.log('hello'.toUpperCase());
