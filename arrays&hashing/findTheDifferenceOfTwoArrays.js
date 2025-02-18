/* 2215. Find the Difference of Two Arrays

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.

Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are 
not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are 
not present in nums2. Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value 
is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = []. */

const findDifference = (nums1, nums2) => {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let answer1 = new Set();
  let answer2 = new Set();

  for (let i of set1) if (!set2.has(i)) answer1.add(i);
  for (let j of set2) if (!set1.has(j)) answer2.add(j);

  return [Array.from(answer1), Array.from(answer2)];
};
console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));

/* const findDifference = (nums1, nums2) => {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let answer1 = [...set1].filter((num) => !set2.has(num));
  let answer2 = [...set2].filter((num) => !set1.has(num));

  return [answer1, answer2];
}; */
//BRO PARA RETORNAR UN ARRAY DE UN OBJETO YA TE LA U KNOW, ARRAY.FROM
