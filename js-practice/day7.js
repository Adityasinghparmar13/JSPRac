
// Question: WebSockets
let ws = new WebSocket('ws://example.com'); ws.onmessage = event => console.log(event.data);

// Question: Node.js File System
const fs = require('fs'); fs.writeFileSync('test.txt', 'Hello');

// Question: Express.js Routing
const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello'));
