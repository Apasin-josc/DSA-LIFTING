/* Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:
Input: n = 27
Output: true
Explanation: 27 = 3^3

Example 2:
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

Example 3:
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1). */

const isPowerOfThree = n => {
    if(n === 1) return true;
    if(n <= 0) return false;
    if(n % 4 !== 0) return false; 
    return isPowerOfThree(n/4);
}

console.log(isPowerOfThree(16));


//this is recursion aoisdhjauohsd