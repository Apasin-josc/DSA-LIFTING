/* 
    1679. Max Number of K-Sum Pairs

    You are given an integer array nums and an integer k.

    In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

    Return the maximum number of operations you can perform on the array. 
    
    Example : 1
    Input: nums = [1,2,3,4], k = 5
    Output: 2
    Explanation: Starting with nums = [1,2,3,4]:
    - Remove numbers 1 and 4, then nums = [2,3]
    - Remove numbers 2 and 3, then nums = []
    There are no more pairs that sum up to 5, hence a total of 2 operations.

    Example : 2
    Input: nums = [3,1,3,4,3], k = 6
    Output: 1
    Explanation: Starting with nums = [3,1,3,4,3]:
    - Remove the first two 3's, then nums = [1,4,3]
    There are no more pairs that sum up to 6, hence a total of 1 operation.
*/

const maxOperations = (nums, k) => {
  //two pointers just work when the array is ordered
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let counter = 0;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === k) {
      counter++;
      i++;
      j--;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }
  return counter;
};

/* console.log(maxOperations([1, 2, 3, 4], 5)); //2 */
console.log(maxOperations([3, 1, 3, 4, 3], 6)); //1

//Time Complexity O(Nlogn)
