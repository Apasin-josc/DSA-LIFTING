""" 
Given a list of integers, nums, and an integer target, k, find two 
numbers in the list that sum up to the target k.
There is exactly one solution for each input, and each element of the list can only be used once in the solution. 
The order of the returned elements does not matter.
"""
from typing import List
def twoSum(nums:List[int], k:int) -> List[int]:
    i,j = 0, len(nums) - 1
    nums.sort()   #[1,4,9,8,10]
    while i <= j:
        sum = nums[i] + nums[j]
        if sum > k:
            j -= 1
        elif sum < k:
            i += 1
        elif sum == k:
            return [nums[i], nums[j]]
    
    return []


print(twoSum([1,10,8,4,9], 17))