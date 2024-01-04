
// Question: Closures
function outer() { let count = 0; return () => count++; } let counter = outer();

// Question: Lexical Scope
let a = 'Hello'; function say() { console.log(a); }

// Question: Prototypal Inheritance
function Person(name) { this.name = name; } Person.prototype.greet = function() { return 'Hi ' + this.name; };

// Question: `this` Keyword
const obj = { name: 'Alice', greet() { console.log(this.name); } }; obj.greet();
