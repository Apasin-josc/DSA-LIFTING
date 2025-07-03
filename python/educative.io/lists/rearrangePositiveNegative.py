""" 
Implement a function that rearranges elements in a list so that all negative elements appear
to the left and all positive elements (including zero) appear to the right. 
It's important to note that maintaining the original sorted order of the input list 
is not required for this task.
"""
from typing import List

def rearrange(lst:List[int]) -> List[int]:
    negatives = []
    non_negatives = []

    for i in range(len(lst)):
        if lst[i] < 0:
            negatives.append(lst[i])
        elif lst[i] >= 0:
            non_negatives.append(lst[i])
    
    return negatives + non_negatives

print(rearrange([5, -2, 7, 3, 0, 8, 0, -6]))


def rearrange(lst):
    ans = []
    for i in range(len(lst)):
        if lst[i] < 0:
            ans.insert(0, lst[i])
        elif lst[i] == 0:
            ans.insert(1, lst[i])
        else:
            ans.insert(len(ans)-1, lst[i])
    
    return lst

#list comprehensions 
#return [i for i in lst if i < 0] + [i for i in lst if i >= 0]