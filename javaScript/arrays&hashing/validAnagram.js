/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const myMapS = new Map();
  const myMapT = new Map();
  if (s.length !== t.length) return false;
  for (let char of s) myMapS.set(char, (myMapS.get(char) || 0) + 1);
  for (let char of t) myMapT.set(char, (myMapT.get(char) || 0) + 1);
  for (let [key, value] of myMapS) {
    if (myMapT.get(key) !== value) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
