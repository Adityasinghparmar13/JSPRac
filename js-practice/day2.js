
// Question: 8. Check palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    return cleaned === reverseString(cleaned);
}
console.log(isPalindrome('Madam')); // true
