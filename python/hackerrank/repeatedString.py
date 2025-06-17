"""
There is a string, s, of lowercase English letters that is repeated infinitely many times. 
Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
-------
s = 'abcaac'
n = 10

The substring we consider is abcaacabca, the first 10 characters of the infinite string. 
There are 5 occurrences of a in the substring.

Function Description
--------------------
Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):
  • s: a string to repeat
  • n: the number of characters to consider

Returns
-------
int: the frequency of a in the substring

Input Format
------------
The first line contains a single string, s.
The second line contains an integer, n.
"""
def repeatedString(s: str, n: int) -> int:
    inf_str = s * n
    limit = []
    i = 0
    occurences = 0
    while i < n:
        limit.append(inf_str[i])
        i += 1
    
    limit_str = "".join(limit)

    for c in limit_str:
        if c == 'a':
            occurences += 1

    return occurences

def repeatedString2(s: str, n: int) -> int:
    count_in_s = s.count('a')
    full_repeats = n // len(s)
    remainder = n % len(s)
    total = full_repeats * count_in_s + s[:remainder].count('a')
    return total
    

    

    

        

print(repeatedString('abcaac', 10))
print(repeatedString2('abcaac', 10))