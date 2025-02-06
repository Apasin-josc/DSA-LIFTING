/*
    334. Increasing Triplet Subsequence
    Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that 
    i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

        Example 1:
        Input: nums = [1,2,3,4,5]
        Output: true
        Explanation: Any triplet where i < j < k is valid.

        Example 2:
        Input: nums = [5,4,3,2,1]
        Output: false
        Explanation: No triplet exists.

        Example 3:
        Input: nums = [2,1,5,0,4,6]
        Output: true
        Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
*/

const increasingTripletSubsequence = (nums) => {
  //global tracking variables
  let first = Infinity;
  let second = Infinity;
  for (let num of nums) {
    //if the current number is less than or equal to the first number
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      //if the current number is less than or equal to the second number
      second = num;
    } else {
      //if the current number is greater than the second number
      return true;
    }
  }
  return false;
};

console.log(increasingTripletSubsequence([1, 2, 3, 4, 5])); //true
//1, 2, 3 is the triplet that satisfies the condition
console.log(increasingTripletSubsequence([5, 4, 3, 2, 1])); //false
//no triplet exists
console.log(increasingTripletSubsequence([2, 1, 5, 0, 4, 6])); //true
//0, 4, 6 is the triplet that satisfies the condition
