/* Given an integer array nums sorted in non-decreasing order, return an array of
 the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] */

const sortedQuares = nums => {
    let result = [];
    let left = 0;
    let right = nums.length-1;
    for(let i = nums.length-1; i >= 0; i--){
        let leftSquared = Math.pow(nums[left], 2);
        let rightSquared = Math.pow(nums[right], 2);
        if(leftSquared > rightSquared){
            result[i] = leftSquared;
            left++;
        }else{
            result[i] = rightSquared;
            right--;
        }
    }
    return result;
};

//iterando desde nums.length-1 por que sabemos que el ultimo va a ser el mas grandeson :) de atras pa adelante
//en teoria pudiese hacerlo como siempre pero al final lo tendria que hacer un tipo de .reverse o una madre asi xd

console.log(sortedQuares([-4,-1,0,3,10])); //[0,1,9,16,100]