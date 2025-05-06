/*
        3️⃣ CHALLENGE 1: Greatest Common Divisor
        -----------------------------------------
        Write a function that  checks if a given string is a palindrome. A palindrome is a word that reads the same
        backwards as forwards.

        Example - "racecar" --> true, "hello" -->false
*/

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrome('racecar'));
