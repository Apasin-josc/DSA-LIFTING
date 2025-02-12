/*     1456. Maximum Number of Vowels in a Substring of Given Length

    Given a string s and an integer k, return the maximum number of vowel letters 
    in any substring of s with length k.

    Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

    Example 1:
    Input: s = "abciiidef", k = 3
    Output: 3
    Explanation: The substring "iii" contains 3 vowel letters.
    
    Example 2:
    Input: s = "aeiou", k = 2
    Output: 2
    Explanation: Any substring of length 2 contains 2 vowels.

    Example 3:
    Input: s = "leetcode", k = 3
    Output: 2
    Explanation: "lee", "eet" and "ode" contain 2 vowels. */

const maximumNumberOfVowels = (s, k) => {
  if (s.length < k) return null;
  let maxVowels = 0;
  let currentVowels = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currentVowels++;
  }
  maxVowels = currentVowels;
  for (let i = k; i < s.length; i++) {
    //pre [a]
    if (vowels.has(s[i - k])) currentVowels--;
    //after [i]
    if (vowels.has(s[i])) currentVowels++;
    maxVowels = Math.max(currentVowels, maxVowels);
  }
  return maxVowels;
};

console.log(maximumNumberOfVowels("abciiidef", 3)); //3
