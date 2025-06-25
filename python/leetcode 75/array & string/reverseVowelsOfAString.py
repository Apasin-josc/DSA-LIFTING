""" 
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
 and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede" 
"""

def reverseVowels(s:str) -> str:
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    ans = []
    for char in s:
        ans.append(char)
    
    i,j = 0, len(ans)-1
    
    while i < j:
        if ans[i] in vowels and ans[j] in vowels:
            ans[i] , ans[j] = ans[j], ans[i]
            i += 1
            j -= 1
        elif ans[i] not in vowels:
            i += 1
        elif ans[j] not in vowels:
            j -= 1
    
    return "".join(ans)
        
            

#vowels = set("aeiouAEIOU")
#ans = list(s)

        
print(reverseVowels('IceCreAm')) #AceCreIm