"""
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

Example
magazine = "attack at dawn"
note     = "Attack at dawn"

The magazine has all the right words, but there is a case mismatch. The answer is No.

Function Description
Complete the checkMagazine function in the editor below. It must print Yes if the note can be formed using the magazine, or No.

checkMagazine has the following parameters:
• string magazine[m]: the words in the magazine
• string note[n]: the words in the ransom note

Prints
• string: either Yes or No, no return value is expected

Input Format
The first line contains two space-separated integers, m and n, the numbers of words in the magazine and the note, respectively.
The second line contains m space-separated strings, each magazine[i].
The third line contains n space-separated strings, each note[i].
"""

def ransomNote(note:str, magazine:str) -> None:
    hashMap = {}
    for word in magazine:
        hashMap[word] = hashMap.get(word, 0) + 1

    #{'a': 4, 't': 3, 'c': 1, 'k': 1, ' ': 2, 'd': 1, 'w': 1, 'n': 1}

    #checking if we got the available letter on the hashMap
    for word in note:
        if hashMap.get(word,0) > 0:
            hashMap[word] -= 1    
        else:
            print('No')
            return
    print('Yes')


print(ransomNote("Attack at dawn", "attack at dawn")) #the output should be no