/*
    1️⃣ CHALLENGE 1: Greatest Common Divisor
    -----------------------------------------
    Given two positive integers, a and b, write a function that returns their Greatest Common Divisor (GCD). The GCD
    is defined as the largest positive integer that divides both a and b without leaving a remainder.

    Example - GCD of 12 & 18 is 6
*/

const findGCD = (a, b) => {
  //base case
  if (b === 0) return a;

  //recursive case
  return findGCD(b, a % b);
};
//time complexity is O(log n)
//space complexity is O(n) //because of the call stack

console.log(findGCD(12, 18)); //6

const findGCDIterative = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

console.log(findGCDIterative(12, 18)); //6
//time complexity is O(log n)
//space complexity is O(1)
