//counting down a number to zero
function countdown(num) {
  if (num <= 0) {
    //base case
    console.log('done');
    return;
  }
  console.log(num);
  countdown(num - 1); //recursive case
}

//console.log(countdown(3));

const recursiveCountStairCaseWays = function (n) {
  //base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  //recursive calls
  return (
    recursiveCountStairCaseWays(n - 1) + recursiveCountStairCaseWays(n - 2)
  );
};
//time complexity O(2^n)
//space complexity O(1)

//console.log(recursiveCountStairCaseWays(5));

/*
Example --> n = 5
        --> return 8
            --> return 3 + 2 + 2 + 1
                --> return 2 + 1
*/

//adding memoization to the cont stair case ways probblem :)
//time complexity O(n)
//space complexity O(n)
const recursiveCountStairCaseWaysMemo = function (n, memo = {}) {
  if (n in memo) return memo[n];

  //base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  //recursive calls
  memo[n] =
    recursiveCountStairCaseWays(n - 1, memo) +
    recursiveCountStairCaseWays(n - 2, memo);
  return memo[n];
};

console.log(recursiveCountStairCaseWaysMemo(5));
