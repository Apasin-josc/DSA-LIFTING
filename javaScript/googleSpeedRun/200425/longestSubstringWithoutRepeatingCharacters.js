/* Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const longestSubstring = s => {
    if(s.length === 0 || !s) return 0;
    let left = 0;
    let maxLength = 0;
    let seenCharacters = new Set();
    for(let right = 0; right < s.length; right++){
        while(seenCharacters.has(s[right])){
            seenCharacters.delete(s[left]);
            left++;
        }
        seenCharacters.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

console.log(longestSubstring("abcabcbb"));