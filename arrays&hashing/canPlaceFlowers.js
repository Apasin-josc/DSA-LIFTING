/* You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers 
cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means 
not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without 
violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true 

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/

const canPlaceFlowers = (flowerBed, n) => {
  //iterating over the array
  for (let i = 0; i < flowerBed.length; i++) {
    if (
      flowerBed[i] === 0 &&
      (i === 0 || flowerBed[i - 1] !== 1) &&
      (i === flowerBed.length - 1 || flowerBed[i + 1] !== 1)
    ) {
      flowerBed[i] += 1;
      n--;
    }
  }
  return n === 0 ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
