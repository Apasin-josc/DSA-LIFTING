/**
 * Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const myMap = new Map();
  for (let str of strs) {
    const s = str.split('').sort().join('');
    if (myMap.has(s)) {
      myMap.get(s).push(str);
    } else {
      myMap.set(s, [str]);
    }
  }
  return Array.from(myMap.values());
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

/**
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
