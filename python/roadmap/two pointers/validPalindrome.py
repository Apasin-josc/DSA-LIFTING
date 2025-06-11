""" 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. 
"""

import re
def isPalindrome(s: str) -> bool:
    if not s:
        return False
    
    #regex function in python 🐍
    cleaned = re.sub(r'[^a-zA-Z]', '', s).lower()
    i, j = 0, len(cleaned) - 1

    while i <= j:
        if cleaned[i] != cleaned[j]:
            return False
        i += 1
        j -= 1
    return True    

#print(isPalindrome("A man, a plan, a canal: Panama"))

def isPalindrome2(s: str) -> bool:
    n = len(s)
    L = 0
    R = n - 1

    while L < R:
        if not s[L].isalnum():
            L+=1
            continue

        if not s[R].isalnum():
            R-=1
            continue

        if s[L].lower() != s[R].lower():
            return False

        L+=1
        R-=1
    
    return True

print(isPalindrome2("A man, a plan, a canal: Panama"))