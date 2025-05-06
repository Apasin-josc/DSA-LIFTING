/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements 
of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  let start = 1;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(start);
    start *= nums[i];
    //[1,1,2,6]
  }
  let start2 = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    //i starts from nums[3] = 4
    //starting from the last element of nums
    //multiply the current element of res with start2
    //then multiply start2 with the current element of nums
    //[24,12,4,1]
    res[i] *= start2;
    start2 *= nums[i];
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6]
