//Given a mixed array of positive and negative integers, return the total number of only positive integers
//Big O(n) :)
const countPositiveNumbers = function (arr) {
  if (arr.length === 0) return 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      counter++;
    }
  }
  return counter;
};

console.log(countPositiveNumbers([14, 31, 10, 13, 20, -27, -29, -32])); //5
