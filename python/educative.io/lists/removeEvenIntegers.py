from typing import List
def remove_even(lst:List[int]) -> List[int]:
    
    for i in range(len(lst) - 1, -1, -1):
        if lst[i] % 2 == 0:
            del lst[i]
    
    return lst


print(remove_even([1,3,-2,4,7]))

def remove_even_list_comprehension(lst:List[int]) -> List[int]:
    return [number for number in lst if number % 2 != 0]

print(remove_even_list_comprehension([3,4,40,31,32]))