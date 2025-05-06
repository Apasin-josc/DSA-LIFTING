/*     1004. Max Consecutive Ones III

    Given a binary array nums and an integer k, return the maximum number of 
    consecutive 1's in the array if you can flip at most k 0's.

    Example 1:
    Input: nums = [1,1,1,0,0,*0*,1,1,1,1,*0*], k = 2
    Output: 6
    Explanation: [1,1,1,0,0,1,1,1,1,1,1]
    Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

    Example 2:
    Input: nums = [0,0,1,1,*0*,*0*,1,1,1,*0*,1,1,0,0,0,1,1,1,1], k = 3
    Output: 10
    Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    Bolded numbers were flipped from 0 to 1. The longest subarray is underlined. */

const longestOnes = (nums, k) => {
  let left = 0;
  let maxWindow = 0;
  let zeroCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    //calculating the window size of 1's last iteration right = 8, left = 3
    maxWindow = Math.max(maxWindow, right - left + 1);
  }
  return maxWindow;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
//to get the length of the window we can just do the R - L + 1

/* zeroCount 3 > 2 --> en nums[5]
left++ --> nums[3], hasta alla llegaste pops  */
