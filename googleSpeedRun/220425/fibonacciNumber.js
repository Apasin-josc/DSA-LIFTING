/* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the 
Fibonacci sequence, such that each number is the sum of the two preceding ones
, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3. */

const fib = n => {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

const fib2 = (n, memo = {}) =>{
    if(n <= 1) return n;
    if(n in memo) return memo[n];
    memo[n] = fib2(n-1, memo) + fib2(n-2, memo);
    console.log(memo);
    return memo[n];
}

const fib3 = n => {
    if(n <= 1) return n;
    let dp = [0, 1];
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-2] + dp[i-1];
    }
    console.log(dp);
    return dp[n];
};

/* console.log(fib(4)); //3 */
/* console.log(fib2(4)); */
console.log(fib3(4));