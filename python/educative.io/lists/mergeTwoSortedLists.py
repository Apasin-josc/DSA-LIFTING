""" 
Given two integer lists, nums1 and nums2, of size m and n, respectively, sorted in nondecreasing order. 
Merge nums1 and nums2 into a single list sorted in nondecreasing order. 
"""
from typing import List
def merge_list(nums1:List[int], nums2:List[int]) -> List[int]:
    i, j = 0, 0
    ans = []
    
    while i < len(nums1) and j < len(nums2):

        if nums1[i] < nums2[j]:
            ans.append(nums1[i])
            i += 1
        else:
            ans.append(nums2[j])
            j += 1
    
    while i < len(nums1):
        ans.append(nums1[i])
        i += 1
        
    while j < len(nums2):
        ans.append(nums2[j])
        j += 1
    
    return ans

print(merge_list([1,3,4,5], [2,6,7,8]))
