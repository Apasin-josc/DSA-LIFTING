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
