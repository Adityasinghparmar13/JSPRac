
// Question: Closures
function outer() { let count = 0; return () => count++; } let counter = outer();

// Question: Lexical Scope
let a = 'Hello'; function say() { console.log(a); }
