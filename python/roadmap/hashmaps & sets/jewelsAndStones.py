""" You're given strings jewels representing the types of stones that are jewels, and
 stones representing the stones you have. Each character in stones is a 
 type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0 """

def numJewelsInStones(jewels:str, stones:str) -> int:
    #counting all my stones
    counts = {}

    for s in stones:
        if s in counts:
            counts[s] += 1
        else:
            counts[s] = 1

    print(counts)
    
    #sum only the ones that are jewels from the jewels str
    total = 0
    for j in jewels:
        total += counts.get(j)
    
    return total
    


print(numJewelsInStones("aA", "aAAbbbb"))

#time complexity O(n + m) <-- building counts, summing jewels
#space complexity O(k)  <-- distinct characters in stones