const mergeTwoArrays = function (arr1, arr2) {
  let totalLength = arr1.length + arr2.length;
  //creating an array to store the result
  let merged = [];

  //creating pointers for the two arrays
  let i = 0;
  let j = 0;

  //looping through the two arrays
  while (merged.length < totalLength) {
    if (i >= arr1.length) {
      merged.push(arr2[j]);
      j++;
      continue;
    }
    if (j >= arr2.length) {
      merged.push(arr1[i]);
      i++;
      continue;
    }
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged;
};

const mergeSort = function (arr) {
  //base case
  if (arr.length <= 1) return arr;

  //splitting the array into two halves
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  //recursively calling the mergeSort function
  return mergeTwoArrays(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([5, 3, 8, 4, 2, 1]));
//O(n log n) time complexity
