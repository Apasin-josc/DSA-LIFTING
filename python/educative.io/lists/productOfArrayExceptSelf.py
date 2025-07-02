""" 
You're given an integer array, nums. Return a resultant array product so that product[i] is 
equal to the product of all the elements of nums except nums[i].

Write an algorithm that runs in O(n)
time without using the division operation.
"""

from typing import List
def product_except_self(nums:List[int]) -> List[int]:
    left = 1
    ans = [0] * len(nums)
    for i in range(len(nums)):
        ans[i] = left
        left *= nums[i]
    
    print(ans) # [1,1,2,6]
    
    right = 1
    for i in range(len(nums) -1, -1, -1):
        ans[i] = right * ans[i]
        right = right * nums[i]
    
    return ans

print(product_except_self([1,2,3,4]))