""" 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]] 
"""
from typing import List

def groupAnagrams(strs:List[str]) -> List[List[str]]:
    hashMap = {}
    for str in strs:
        #take the word, sort its letters alphabetically, then merge them back into a single string
        key = "".join(sorted(str))
        
        if key not in hashMap:
            #creating the empty key:value field
            hashMap[key] = []
        #adding to the key the str
        hashMap[key].append(str)

    return list(hashMap.values())

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))