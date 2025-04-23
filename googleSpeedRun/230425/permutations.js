/* Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]] */

const permute = (nums, arr = [], res = []) => {
    if(nums.length === 0) res.push([...arr]);
    for(let i = 0; i < nums.length; i++){
        let rest = nums.filter((n, index) => index !== i); // every value that is not the actual picked
        arr.push(nums[i]);
        permute(rest, arr, res);
        //to find all the possible permutations
        arr.pop();
    }
    return res;
};

console.log(permute([1,2,3], arr = [], res = []));