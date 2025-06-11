"""
 Given an integer array nums sorted in non-decreasing order, return an 
array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] 
"""

from typing import List
def sortedSquares(nums:List[int]) -> List[int]:
    
    left, right = 0, len(nums) - 1
    ans = []

    while left <= right:
        if abs(nums[left]) > abs(nums[right]):
            ans.append(nums[left] ** 2)
            left += 1
        else:
            ans.append(nums[right] ** 2)
            right -= 1
        
    ans.reverse()
    return ans
                
    

#print(sortedSquares([-4,-1,0,3,10]))

def sortedSquares2(nums:List[int]) -> List[int]:
    
    n = len(nums)
    ans = [0] * n
    left, right = 0, n - 1
    write = n - 1

    while left <= right:
        left_sq = nums[left] ** 2
        right_sq = nums[right] ** 2

        if left_sq > right_sq:
            ans[write] = left_sq
            left += 1
        else:
            ans[write] = right_sq
            right -= 1

        write -= 1

    return ans

print(sortedSquares2([-4,-1,0,3,10]))