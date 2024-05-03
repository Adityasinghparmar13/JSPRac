
// Question: 13. Simple interest calculator

// Mathematical formula implementation
function simpleInterest(p, r, t) {
    // SI = (P × R × T)/100
    return (p * r * t) / 100;
}
console.log(simpleInterest(1000, 5, 2)); // 100

// Question: 15. Generate multiplication table

// Loop-based table generation
function multiplicationTable(num) {
    // Iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}
multiplicationTable(5); // Prints 5's table
