/*Divide & Conquer
    - Breaking a problem into smaller sub problems
    - Works well with recursion

    Example:
    find the largest number in a given array of integers
*/

const findLargestNumber = function (arr) {
  //base case
  if (arr.length === 1) return arr[0];

  //smaller chunks of problems
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  //recursive step, magic happens here
  const leftMax = findLargestNumber(left);
  const rightMax = findLargestNumber(right);

  //returning the Max number
  return Math.max(leftMax, rightMax);
};

console.log(findLargestNumber([1, 4, 2, 7, 5, 9, 3]));
//time complexity of O(log n)
//space complexity of O(log n) due to the recursion stack
