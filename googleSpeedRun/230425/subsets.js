/* Given an integer array nums of unique elements, return all possible subsets 
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]] */

const subset = (nums)=> {
    let res = [[]];
    function dfs(index, current){
        for(let i = index; i < nums.length; i++){
            current.push(nums[i]);
            res.push([...current]);
            dfs(i+1, current);
            //backtrack
            current.pop();
        }
    }
    dfs(0, []);
    return res;
};

console.log(subset([1,2,3]));