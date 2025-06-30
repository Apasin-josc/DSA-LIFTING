"""
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it 
reads the same forward and backward. Alphanumeric characters include letters and numbers.

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

def isPalindrome(s:str) -> bool:
    L, R = 0, len(s)-1

    while L <= R:
        if not s[L].isalnum():
            L += 1
            continue

        if not s[R].isalnum():
            R -= 1
            continue

        if s[L].lower() != s[R].lower():
            return False
        
        L += 1
        R -= 1
    
    return True
        

print(isPalindrome('A man, a plan, a canal: Panama'))