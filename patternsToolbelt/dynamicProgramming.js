/*
    Dynamic Programming
        - breaking a problem into smaller sub problems (sounds like divide and conquer, but it handles the sub problems with memo)
        -remember results of previously calculated sub problems (memoization)
        -use memoization to do this 😋

        Example:
        give a grid of dimensions m * n, count the number of unique paths from top-left
        to bottom-right, moving only right or down
*/

const countPaths = function (m, n, memo = {}) {
  //base case - only 1 path if m or n is 1
  if (m === 1 || n === 1) return 1;

  //check if the result is already in the memo
  const key = `${m},${n}`;
  if (memo[key]) return memo[key];

  //return countPaths(m - 1, n) + countPaths(m, n - 1);
  memo[key] = countPaths(m - 1, n, memo) + countPaths(m, n - 1, memo);
  return memo[key];
};

console.log(countPaths(3, 3));
//time complexity of O(m * n)
//space complexity of O(m * n)

/*
    problem without memoization
    input: (3,3)
        --> countPaths(2,3) + countPaths(3,2)
        --> countPaths(1,3) + countPaths(2,2) + countPaths(2,2) + countPaths(3,1)
        --> 1 + countPaths(1,2) + countPaths(2,1) + countPaths(1,2)  + countPaths(2,1) + 1
        --> 1 + 1 + 1 + 1 + 1 + 1 = 6
*/

/*
    with memoization we can store the results of the sub problems
    we just need a object to store the results (like a dictionary
*/
