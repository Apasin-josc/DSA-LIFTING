/*
    You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order,
    starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.
    
    return the merged string

    Example 1:
    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"
    Explanation: The merged string will be merged as follows:
    - word1: a  b  c 
    - word2:   p  q  r
    --> merged: a p b q c r
*/

const mergeStringsAlternately = (word1, word2) => {
  let i = 0;
  let j = 0;
  let merged = "";
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      merged += word1[i];
      i++;
    }
    if (j < word2.length) {
      merged += word2[j];
      j++;
    }
  }
  if (i < word1.length) {
    merged += word1[i];
    i++;
  }
  if (j < word2.length) {
    merged += word2[j];
    j++;
  }
  return merged;
};

console.log(mergeStringsAlternately("abc", "pqr")); //apbqcr
//time complexity: O(n + m) where n is the length of word1 and m is the length of word2
//space complexity: O(n + m)
