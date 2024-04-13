
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
