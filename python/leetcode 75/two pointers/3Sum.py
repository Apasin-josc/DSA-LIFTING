""" 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k,
 and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
"""
from typing import List

def threeSum(nums:List[int]) -> List[List[int]]:
    nums.sort()
    ans = []

    for i in range(len(nums)-2):
        if nums[i] > 0:
            break

        if i == 0 or nums[i] != nums[i-1]:
            low, high = i+1, len(nums)-1

            while low < high:
                sum = nums[i] + nums[low] + nums[high]

                if sum > 0:
                    high -= 1
                elif sum < 0:
                    low += 1
                else:
                    ans.append([nums[i], nums[low], nums[high]])
                    low += 1
                    high -= 1
                    while low < high and nums[low] == nums[low - 1]:
                        low += 1
                    while low < high and nums[high] == nums[high + 1]:
                        high -= 1
    return ans


print(threeSum([-1,0,1,2,-1,-4])) #Output: [[-1,-1,2],[-1,0,1]]