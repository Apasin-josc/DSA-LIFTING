/**
 * Given an array of integers arr, return true if
 * the number of occurrences of each value in the array is unique or false otherwise.
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const seenOccurences = new Map();
  for (let num of arr)
    seenOccurences.set(num, (seenOccurences.get(num) || 0) + 1);
  const setOccurences = new Set();
  for (let num of seenOccurences.values()) {
    if (setOccurences.has(num)) {
      return false;
    }
    setOccurences.add(num);
  }
  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
