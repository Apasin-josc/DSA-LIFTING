/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (myMap.has(complement)) {
      return [myMap.get(complement), i];
    } else {
      myMap.set(nums[i], i);
      console.log(myMap);
    }
  }
  return [];
};
console.log(twoSum([15, 7, 11, 2], 9)); // [0,1]
// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
