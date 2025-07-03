""" 
We're given a sorted list, nums, containing positive integers only.
We have to rearrange the list so that when returned, the 0th
index of the list will have the largest number, 
the 1st index will have the smallest number, 
the 2nd index will have the second largest number, 
the 3rd index will have the second smallest number, and so on.
In the end, we'll have the largest remaining numbers in descending order and 
the smallest in ascending order at even and odd positions, respectively.
"""

from typing import List

def rearrangeSortedMaxMin(nums:List[int]) -> List[int]:
    middle = len(nums)//2 
    max_order = nums[:middle-1:-1]
    min_order = nums[:middle]

    ans = []

    i, j = 0, 0
    while i < len(max_order) and j < len(min_order):
        if i < len(max_order):
            ans.append(max_order[i])
            i += 1

        if j < len(min_order):
            ans.append(min_order[j])
            j += 1
    
    while i < len(max_order):
        ans.append(max_order[i])
        i += 1

    while j < len(min_order):
        ans.append(min_order[j])
        j += 1

    return ans 

print(rearrangeSortedMaxMin([12,24,36,48,60,72,84,96])) #96,12,84,24,72,36,60,48
print(rearrangeSortedMaxMin([10,20,30,40,50]))