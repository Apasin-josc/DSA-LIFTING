from typing import List
def remove_even(lst:List[int]) -> List[int]:
    ans = []
    for i in range(len(lst)):
        if lst[i] % 2 == 0:
            pass
        else:
            ans.append(lst[i])
    
    return ans


print(remove_even([1,3,-2,4,7]))