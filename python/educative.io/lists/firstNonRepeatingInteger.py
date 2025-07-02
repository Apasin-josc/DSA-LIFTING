""" Given a list nums, find the first nonrepeating integer in it. """

from typing import List
#from collections import Counter

def firstNonRpeating(nums:List[int]) -> int:
    #count = Counter(nums)
    frequency_counter = {}
    for num in nums:
        if num in frequency_counter:
            frequency_counter[num] += 1
        else:
            frequency_counter[num] = 1
    
    for num in nums:
        if frequency_counter[num] == 1:
            return num
    
    return -1
        





print(firstNonRpeating([1,1,2,2,3,]))
#print(firstNonRpeating([1,2,3]))