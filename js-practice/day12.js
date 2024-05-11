
// Question: 46. Random number in range

// Generate random integer between min-max
function randomInRange(min, max) {
    // Scale and shift Math.random output
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 10)); // Random integer 5-10
