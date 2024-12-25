/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false
 if every element is distinct.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const seenNumbers = new Set();
  for (let num of nums) {
    if (seenNumbers.has(num)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
