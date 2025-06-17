""" 
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]] 
"""
from typing import List

def permutations(nums:List[int]) -> List[List[int]]:

    ans, sol = [], []
    n = len(nums)

    def backtrack():
        if n == len(sol):
            ans.append(sol[:])
            return
        
        for num in nums:
            if num not in sol:
                sol.append(num)
                backtrack()
                sol.pop()
        
    backtrack()
    return ans

print(permutations([1,2,3]))