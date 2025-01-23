/*
    Multiple Pointers
        - use 2 or more pointers to keep track of positions
        - update the pointer positions
        - good for finding pairs, subarrays, etc
        - works well with **sorted** arrays

        Example:
        find a pair of nums that add up to a target number
        //arr = [1,2,4,6,8,8,9], target = 12
        //pair = [4,8]
*/

const findPairWithSum = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]]; //returning the pair as an array 🤗
    if (sum < target)
      left++; //move the left pointer because the sum is too small
    else right--; //move the right pointer because the sum is too large
  }
};

console.log(findPairWithSum([1, 2, 4, 6, 8, 8, 9], 12)); //[4,8]
