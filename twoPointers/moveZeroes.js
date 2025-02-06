/*     283. Move Zeroes
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
    the non-zero elements.

    Note that you must do this in-place without making a copy of the array.

    Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]
    
    Example 2:
    Input: nums = [0]
    Output: [0] */

const moveZeroes = (arr) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }
  return arr;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

/* moving arr[i]: 0 and moving arr[j]: 1
[ 1, 0, 0, 3, 12 ]
moving arr[i]: 0 and moving arr[j]: 3
[ 1, 3, 0, 0, 12 ]
moving arr[i]: 0 and moving arr[j]: 12
[ 1, 3, 12, 0, 0 ]
[ 1, 3, 12, 0, 0 ] */
