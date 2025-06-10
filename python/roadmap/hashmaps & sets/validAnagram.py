""" 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
"""

def isAnagram(s:str, t:str) -> bool:
    #edge case
    if len(s) != len(t):
        return False

    #declaring the hashmap for the s string 
    hashmap_s = {}
    for c in s:
        if c in hashmap_s:
            hashmap_s[c] += 1
        else:
            hashmap_s[c] = 1
    
    #declaring the hashmap for the t string
    hashmap_t = {}
    for c in t:
        if c in hashmap_t:
            hashmap_t[c] += 1
        else:
            hashmap_t[c] = 1
    
    #comparing the items of each hashmap and returning true or false 
    if hashmap_s.items() == hashmap_t.items():
        return True
    else:
        return False

print(isAnagram("anagram", "nagaram"))

#T: O(s + m)
#S: O(s + m)