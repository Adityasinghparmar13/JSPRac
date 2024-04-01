
// Question: 8. Check palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    return cleaned === reverseString(cleaned);
}
console.log(isPalindrome('Madam')); // true

// Question: 6. Check prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
