/*     643. Maximum Average Subarray I
    You are given an integer array nums consisting of n elements, and an integer k.

    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
    Any answer with a calculation error less than 10-5 will be accepted.

    Example 1:
    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

    Example 2:
    Input: nums = [5], k = 1
    Output: 5.00000 */

const findMaxAverage = (nums, k) => {
  if (nums.length < k) return null;
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //12.75000
//                          0,  1,  2,  3,  4, 5

//i = 4         -->     4<6     -->     2 - 1 + 50 = 51     -->     51 / 4 = 12.75
//i = 5         -->     5<6     -->     51 - 12 + 3 = 42
