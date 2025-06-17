""" 
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example:
n = 7
arr = [1,2,1,2,1,3,2]
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Function Description
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.
 """

from typing import List

def sockMerchant(n: int, arr:List[int]) -> int:
    hashMap = {}
    for num in arr:
        hashMap[num] = hashMap.get(num, 0) + 1
    
    pairs = 0
    for key, value in hashMap.items():
        if value >= 2:
            pair = value//2
            pairs += pair
    
    return pairs
        

print(sockMerchant(7, [1,2,1,2,1,3,2]))