""" You are given two strings word1 and word2. Merge the strings by adding letters 
in alternating order, starting with word1. If a string is longer than the other, append 
the additional letters onto the end of the merged string.
Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d """

def mergeStringsAlternately(word1: str, word2: str) -> str:
    A, B = len(word1), len(word2)
    a, b = 0, 0
    merge = []
    
    while a < A and b < B:
        merge.append(word1[a])
        a += 1
        merge.append(word2[b])
        b += 1
    
    while a < A:
        merge.append(word1[a])
        a += 1
    
    while b < B:
        merge.append(word2[b])
        b += 1
    return ''.join(merge)

print(mergeStringsAlternately("abc", "pqr"))
