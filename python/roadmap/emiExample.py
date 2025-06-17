""" 
There is an array of numbers at the input and the desired sum. 
For example, the desired sum is 5 and we have the following array: [1, 3, 6, 2, 3, 4]
In this case, we should return the following pairs  (in any order): 3,2 4,1
The goal is to implement a method to find the solution efficiently 
"""

from typing import List

def findDesiredSum(nums: List[int], target: int) -> List[List[int]]:
    seen = set()
    ans = []
    for num in nums:
        complement = target - num
        if complement in seen:
            ans.append([num, complement])
        seen.add(num)
    return ans

print(findDesiredSum([1, 3, 6, 2, 3, 4], 5))