/* Given an array of integers nums which is sorted in ascending order, and 
an integer target, write a function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

*/

const binarySearch = (nums, target) =>{
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let middle = Math.floor((left+right)/2);

        if(nums[middle] === target) return middle; //we found it boy

        if(nums[middle] < target){      //it's not on the left, let's go to the right
            left = middle + 1;
        }else{                         //it's not on the right, let's go to the left boy
            right = middle - 1;
        }
    }
    return -1;
}
console.log(binarySearch([-1,0,3,5,9,12], 9));
