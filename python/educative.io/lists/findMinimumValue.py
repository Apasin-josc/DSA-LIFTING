""" 
Given a list of integers, lst, find the minimum value from the list.
"""
from typing import List

def findMinimum(lst:List[int]) -> int:
    min_value = float('inf')
    for num in lst:
        if num < min_value:
            min_value = num
    
    return min_value

print(findMinimum([1,2,-3,-1,-2]))