/*

Q1. What does “counting digits” mean in programming?

Answer:
Counting digits means finding how many digits are present in a number.

Example:

Number = 1244

Digits = 4

function countDigits(n) {
    let cnt = 0;
    while (n > 0) {
        cnt++;
        n = Math.floor(n / 10);
    }
    return cnt;
}

function main() {
    let N = 1244;
    console.log("N: " + N);
    let digits = countDigits(N);
    console.log("Number of digits in N: " + digits);
}

main();

Q4. Why do we divide the number by 10?

Answer:
Dividing by 10 removes the last digit of the number.

Example:

1244 / 10 = 124

124 / 10 = 12

12 / 10 = 1

1 / 10 = 0

Q5. Why do we use Math.floor(n / 10)?

Answer:
JavaScript gives decimal values when dividing.
Math.floor() removes the decimal part and keeps the integer value.

Q6. What is the time complexity of this approach?

Answer:
O(d)
where d = number of digits in the number.

*/

/*

QUESTION 1: COUNT DIGITS

Difficulty: Easy

Given a natural number n. You have to find the number of digits in it and return it.

Examples:
Input: n = 12
Output: 2
Explanation: 12 has 2 digits

Input: n = 456
Output: 3
Explanation: 456 has 3 digits

function reverseDigits(n) {
    let reverse = 0;

    while (n > 0) {
        let lastDigit = n % 10;
        reverse = (reverse * 10) + lastDigit;
        n = Math.floor(n / 10);
    }

    return reverse;
}

function main() {
    let N = 1240;
    console.log("N:", N);
    let digits = reverseDigits(N);
    console.log("Reverse of digits in N:", digits);
}

main();


TIME & SPACE COMPLEXITY

Time Complexity: O(log10 n)
Space Complexity: O(1)


*/


/*

❓ Question

Write a JavaScript program to check whether a given number is a Palindrome or not.

✅ Answer
🔹 What is a Palindrome Number?

A Palindrome number is a number that remains the same when its digits are reversed.

📌 Examples:

121 → Palindrome ✅

1111 → Palindrome ✅

1112 → Not a Palindrome ❌

🧠 Logic Used

Store the original number in a variable.

Reverse the number using a while loop.

Compare the reversed number with the original number.

If both are equal → Palindrome, otherwise → Not Palindrome.



function checkPalindrome(n) {
    let rev = 0;
    let originalNumber = n;

    while (n > 0) {
        let lastDigit = n % 10;
        rev = (rev * 10) + lastDigit;
        n = Math.floor(n / 10);
    }

    if (originalNumber === rev) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}

function main() {
    let N = 1112;
    console.log("Number:", N);
    checkPalindrome(N);
}

main();

*/


