/* An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false */

const isMonotonic = nums => {
    let isDecreasing = true;
    let isIncreasing = true;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] < nums[i+1]){
            isIncreasing = false;
        }

        if(nums[i] > nums[i+1]){
            isDecreasing = false;
        }
    }
    return isDecreasing || isIncreasing;
};

console.log(isMonotonic([1,2,2,3]));