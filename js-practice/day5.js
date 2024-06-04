
// Question: 23. Count vowels in string

// Count total vowels using regex
function countVowels(str) {
    // Match all vowels (case-insensitive)
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels('JavaScript')); // 3

// Question: 21. Calculate sphere volume

// Calculate sphere volume using formula
function sphereVolume(radius) {
    // V = (4/3)πr³
    return (4/3) * Math.PI * Math.pow(radius, 3);
}
console.log(sphereVolume(3).toFixed(2)); // 113.10
