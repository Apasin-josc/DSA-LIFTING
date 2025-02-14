/*     1493. Longest Subarray of 1's After Deleting One Element

    Given a binary array nums, you should delete one element from it.

    Return the size of the longest non-empty subarray containing only 1's in the resulting array. 
    Return 0 if there is no such subarray.

    

    Example 1:
    Input: nums = [1,1,0,1]
    Output: 3
    Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

    Example 2:
    Input: nums = [0,1,1,1,0,1,1,0,1]
    Output: 5
    Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

    Example 3:
    Input: nums = [1,1,1]
    Output: 2
    Explanation: You must delete one element. */

const longestSubarary = (nums) => {
  let zeroCounter = 0;
  let left = 0;
  let maxWindow = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCounter++;

    /* if there's more than one zero we move left
     to have only one zero on the window */
    while (zeroCounter > 1) {
      if (nums[left] === 0) zeroCounter--;
      left++;
    }

    /* calculating the window size without the deleted zero */
    maxWindow = Math.max(maxWindow, right - left);
  }
  return maxWindow;
};

console.log(longestSubarary([1, 1, 0, 1]));
console.log(longestSubarary([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarary([1, 1, 1]));

/*
        R
[(1, 1, 0, 1)];
  L 
*/
