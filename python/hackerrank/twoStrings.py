"""
Given two strings, determine if they share a common substring. A substring may be as small as one character.

Example
s1 = 'and'
s2 = 'art'

These share the common substring a.

s1 = 'be'
s2 = 'cat'

These do not share a substring.

Function Description
Complete the function twoStrings in the editor below.

twoStrings has the following parameter(s):
• string s1: a string
• string s2: another string

Returns
• string: either YES or NO

Input Format
The first line contains a single integer p, the number of test cases.

The following p pairs of lines are as follows:
• The first line contains string s1.
• The second line contains string s2.
"""

def commonSubstring(s1:str, s2:str) -> str:
    hash_map_s1 = {}
    for c in s1:
        hash_map_s1[c] = hash_map_s1.get(c, 0) + 1
    
    """ hash_map_s2 = {}
    for c in s2:
        hash_map_s2[c] = hash_map_s2.get(c, 0) + 1 """
    
    for c in s2:
        if hash_map_s1.get(c, 0) > 0:
            return 'YES'
    return 'NO'

print(commonSubstring("and", "art"))