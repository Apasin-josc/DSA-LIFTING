from typing import List
def remove_even(lst:List[int]) -> List[int]:
    
    for i in range(len(lst) - 1, -1, -1):
        if lst[i] % 2 == 0:
            #del lst[i]
            lst.remove(lst[i])
    
    return lst


print(remove_even([1,3,-2,4,7]))