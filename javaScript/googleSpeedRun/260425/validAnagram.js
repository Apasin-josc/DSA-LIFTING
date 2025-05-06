/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false */

const isValidAnagram = (s, t) => {
    const sMap = new Map();
    const tMap = new Map();
    for(let char of s) sMap.set(char, (sMap.get(char) || 0) + 1);
    for(let char of t) tMap.set(char, (tMap.get(char) || 0) + 1);
    for(let [key, values] of sMap){
        if(tMap.get(key) !== values) return false;
    }
    return true;
};

console.log(isValidAnagram("anagram", "nagaram"));