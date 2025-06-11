""" Given a string text, you want to use the characters of text to form as many instances
 of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances
 that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0 """

def maxNumberOfBalloons(text: str) -> int:
    balloon = 'balloon'
    hashMap = {}
    for ch in text:
        hashMap[ch] = hashMap.get(ch, 0) + 1
    
    #checking if it doesn't exist one character of balloon on the hashMap to return 0
    if any(c not in hashMap for c in balloon):
        return 0
    else:
        return min(
            hashMap['b'],
            hashMap['a'],
            hashMap['l']//2,
            hashMap['o']//2,
            hashMap['n']
        )


print(maxNumberOfBalloons('loonbalxballpoon'))