
// Question: Closures
function outer() { let count = 0; return () => count++; } let counter = outer();

// Question: Lexical Scope
let a = 'Hello'; function say() { console.log(a); }

// Question: Prototypal Inheritance
function Person(name) { this.name = name; } Person.prototype.greet = function() { return 'Hi ' + this.name; };

// Question: `this` Keyword
const obj = { name: 'Alice', greet() { console.log(this.name); } }; obj.greet();

// Question: Check if variable is an array
console.log(Array.isArray(fruits));

// Question: Use slice to get first 3 array elements
console.log(fruits.slice(0,3));

// Question: Convert object to JSON string
console.log(JSON.stringify(person));

// Question: Handle division by zero with try/catch

    try {
      let result = 10/0;
      if(!isFinite(result)) throw 'Division error';
    } catch(e) {
      console.error(e);
    }

// Question: Create a class with a constructor

    class Car {
      constructor(brand) { this.brand = brand; }
    }
    let myCar = new Car('Toyota');
