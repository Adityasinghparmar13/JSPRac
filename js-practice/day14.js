
// Question: 55. Generate random UUID

// UUID v4 pattern generator
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g, 
        // Replace with random hex digits
        c => (c === 'x' 
            ? (Math.random() * 16 | 0).toString(16) 
            : (Math.random() * 4 | 8).toString(16)
        )
    );
}
console.log(generateUUID()); // Random UUID v4

// Question: 53. Calculate days between dates

// Date difference calculation
function daysBetween(date1, date2) {
    // Convert milliseconds to days
    const diff = Math.abs(date2 - date1);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log(daysBetween(
    new Date('2023-01-01'), 
    new Date('2023-01-10')
)); // 9

// Question: 54. Format phone number

// Basic phone number formatting
function formatPhoneNumber(numbers) {
    // Join and insert formatting
    const str = numbers.join('');
    return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
}
console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0])); // (123) 456-7890
