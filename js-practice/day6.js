
// Question: 23. Count vowels in string

// Count total vowels using regex
function countVowels(str) {
    // Match all vowels (case-insensitive)
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels('JavaScript')); // 3

// Question: 24. Convert string to title case

// Title case transformation
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => 
        // Capitalize first letter of each word
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
console.log(toTitleCase('hello world')); // 'Hello World'
