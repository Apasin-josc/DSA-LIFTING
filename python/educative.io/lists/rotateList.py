""" 
Given a list, nums, and an integer, k, rotate the list to the right by k positions so that 
each rotation involves shifting the elements one position at a time.
"""

from typing import List

def rotateList(nums:List[int], k:int) -> List[int]:
    
    for i in range(k):
        if i < k:
            lastValue = nums.pop()
            nums.insert(0, lastValue)

    return nums

    rotated_list = nums[-k:] + nums[:-k]
    return rotated_list

print(rotateList([10,20,30,40,50], 3))
print(rotateList([5,-12,15,21,-6,17], 4))
print(rotateList([-2,2,11,15,-3], 8))




def right_rotate(nums, k):
    # Determine rotation index
    if len(nums) == 0:
        k = 0  # If the list is empty, no rotation needed
    else:
        k = k % len(nums)  # Calculate effective rotation amount
    
    # Perform rotation by slicing the list
    rotated_list = nums[-k:] + nums[:-k]

    return rotated_list