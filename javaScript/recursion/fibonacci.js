const fibonacciRecursive = function (n) {
  if (n < 1) return 0;
  if (n === 1) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(4));
//1, 1, 2, 3, 5, 8 , 13 , 21

/* 
    example with n = 4
        1--> return fib(3) + fib(2)
            2--> return fib(2) + fib(1) + fib(1) + fib(0)
                3--> return fib(1) + fib(0)
*/

const fibonacciMemo = function (n, memo = {}) {
  //memoization
  if (n in memo) return memo[n];

  //base case
  if (n < 1) return 0;
  if (n === 1) return 1;

  //recursive calls
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
};
console.log(fibonacciMemo(5));

/* instead of having a O(2^n) with the memoization we're having a O(n)
  INPUT: n = 5
  --> memo[5]= 5;
    --> memo[4] = 3;
      --> memo[3] = 2;
        --> memo[2] = 1;
*/
