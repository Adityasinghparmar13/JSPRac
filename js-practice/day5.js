
// Question: Closures
function outer() { let count = 0; return () => count++; } let counter = outer();
