""" Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some 
(can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false """

def isSubsequence(s:str, t:str) -> bool:
    if len(s) == 0:
        return True
    
    i, j = 0, 0
    while j < len(t) and i < len(s):
        if t[j] == s[i]:
            i += 1
        j += 1
    
    return True if i == len(s) else False

    
    
        
print(isSubsequence("abc", "ahbgdc"))
#return True if i == len(s) else False