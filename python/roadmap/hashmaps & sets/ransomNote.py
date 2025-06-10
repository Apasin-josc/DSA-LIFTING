""" Given two strings ransomNote and magazine, return true if ransomNote 
can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true """

from typing import Counter

def canConstruct(ransomNote: str, magazine: str) -> bool:

    #an empty ransomNote can always be constructed
    if not ransomNote:
        return True

    hashMap = {}
    for ch in magazine:
        hashMap[ch] = hashMap.get(ch, 0) + 1
    
    for ch in ransomNote:
        if hashMap.get(ch, 0) <= 0:
            return False
        hashMap[ch] -= 1
    
    return True

def canConstruct2(ransomNote:str, magazine: str) -> bool:
    
    hashMap = Counter(magazine)

    for ch in ransomNote:
        if hashMap[ch] > 0:
            hashMap[ch] -= 1
        else:
            return False
    
    return True

#print(canConstruct("aa", "aab"))
print(canConstruct2("aa", "aab"))
