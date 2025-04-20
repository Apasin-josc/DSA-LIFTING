/* Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if 
you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined. */

const maxConsecutiveOnes = (nums, k) => {
    let maxSum = 0;
    let maxZeroes = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0) maxZeroes++;

        while(maxZeroes > k){
            if(nums[left] === 0) maxZeroes--;
            left++;
        }

        maxSum = Math.max(maxSum, right - left + 1);
    }
    return maxSum;
};

console.log(maxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0], 2));