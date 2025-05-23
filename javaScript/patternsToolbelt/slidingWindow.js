/*
    Sliding Window Pattern
        - instead of having nested loops, we can use a single loop to iterate over the array
        - use a "window" that "slides" across the data ✈
        -this pattern involves creating a window which can either be an array or number from one position to another
        -depending on a certain condition, the window either increases or closes (and a new window is created)
        -very useful for keeping track of a subset of data in an array/string etc.

        Example:
        Given an array of integers and a number K, find the maximum sum of a *contiguous subarray* of size K
        //arr = [3,9,1,11,4,2,12,0,2,7]
        //K = 3
        //contiguous subarrays: [3,9,1] [1,11,4] [2,12,0]
        //the biggest sum would be 21
*/

const maxSubarraySum = function (arr, k) {
  //handling edge cases// the window is going to be size 3 || k = 3
  if (arr.length < k) return null;

  //setting up the window
  let windowSum = 0;
  let maxSum = 0;

  //first window sum, using i < k because we want to sum the first k elements
  //in this case [3,9,1] = 13
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  //slide the window over the array, adding one extra number and removing the first number
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; //i - k is the first number in the window & i is the last number in the window
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([3, 9, 1, 11, 4, 2, 12, 0, 2, 7], 3)); //21
