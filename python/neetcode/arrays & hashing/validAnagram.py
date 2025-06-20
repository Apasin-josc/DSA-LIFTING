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

    if len(s) != len(t):
        return False

    hashMap_s = {}
    for char in s:
        if char in hashMap_s:
            hashMap_s[char] += 1
        else:
            hashMap_s[char] = 1

    hashMap_t = {}
    for char in t:
        hashMap_t[char] = hashMap_t.get(char, 0) + 1
    
    if hashMap_s.items() != hashMap_t.items():
        return False
    else:
        return True



print(isAnagram("anagram", "nagaram"))