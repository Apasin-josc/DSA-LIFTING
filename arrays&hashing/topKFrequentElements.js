/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  let result = [];
  let count = 0;
  for (let [key, value] of mapSort1.entries()) {
    if (count < k) {
      result.push(key);
      count++;
    }
  }
  return result;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
