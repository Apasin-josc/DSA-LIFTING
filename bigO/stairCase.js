// Given n the total number of steps in a staircase, and the ability to climb either 1 step or 2 steps
//  at a time, how many distinct ways can you reach the top?

const countStaircaseWays = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let waysToReachPreviousStep = 2; //(n-1)
  let waysToReachTwoStepsBack = 1; //(n-2)
  let totalWays = 0;

  for (let i = 3; i <= n; i++) {
    totalWays = waysToReachPreviousStep + waysToReachTwoStepsBack;

    //update other variables (n-2 & n-1)
    waysToReachTwoStepsBack = waysToReachPreviousStep;
    waysToReachPreviousStep = totalWays;
  }
  return totalWays;
};
console.log(countStaircaseWays(3));
