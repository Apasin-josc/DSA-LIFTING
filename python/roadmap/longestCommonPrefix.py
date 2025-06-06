""" Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. """

from typing import List

def longestCommonPrefix(strs: List[str]) -> str:
    min_length = float('inf')
    for s in strs:
        if len(s) < min_length:
            min_length = len(s)
    
    i = 0
    while i < min_length:
        for s in strs:
            if s[i] != strs[0][i]:
                return s[:i]
            i += 1

    return s[:1]
    return s[0][:i]

print(longestCommonPrefix(["flower", "flow", "flight"]))