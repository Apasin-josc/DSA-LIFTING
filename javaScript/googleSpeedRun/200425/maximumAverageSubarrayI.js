/* You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000 */

const maximumAverage = (nums, k) => {
    /* if(nums.length < k) return 0;
    let left = 0;
    let right = k;
    let sum = 0;
    
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }

    let maxAverage = sum / k;

    while(right < nums.length){
        sum = sum - nums[left] + nums[right];
        maxAverage = Math.max(maxAverage, (sum/k));
        left++;
        right++;
    }

    return maxAverage; */

    if (nums.length < k) return null;

    let maxSum = 0;
    let windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += nums[i];
    }

    maxSum = windowSum;

    for(let i = k; i < nums.length; i++){
        windowSum = windowSum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum / k;

};

console.log(maximumAverage([1,12,-5,-6,50,3], 4));