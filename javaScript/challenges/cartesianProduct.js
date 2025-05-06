/*
    2️⃣ CHALLENGE 2: Cartesian Product
    -----------------------------------------
    Given two arrays, arr1 and arr2, generate all possible pairs (x,y) where x is an element of arr1 and y is an element
    of arr2. Each pair should be represented as an array [x,y] and the output should be an array of these pairs.

    Example - arr1 = ['a', 'b'] ^ arr2 = [1, 2, 3]
    Solution:
    [
        ['a', 1], ['a', 2], ['a', 3],
        ['b', 1], ['b', 2], ['b', 3]
    ]
*/

const cartesianProduct = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
};

console.log(cartesianProduct(['a', 'b'], [1, 2, 3]));
