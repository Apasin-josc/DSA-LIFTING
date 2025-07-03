"""
Try to solve the Find Second Maximum Value in a List problem.
"""
from typing import List
def secondMaximum(nums:List[int]) -> int:
    nums.sort()
    return nums[-2]
            
#print(secondMaximum([4,2,1,5,0]))

def secondMaximumSquared(nums:List[int]) -> int:
    first = float('-inf')
    second = float('-inf')

    for num in nums:
        if num > first:
            second = first 
            first = num
        elif first > num > second:
            second = num
    
    return second

print(secondMaximumSquared([4,2,1,5,0]))



"""
single pass approach 
"""