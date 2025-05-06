function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === value) return middle;

    if (arr[middle] < value) {
      left = middle + 1;
    }

    if (arr[middle] > value) {
      right = middle - 1;
    }
  }
  return -1;
}
//console.log(binarySearch([1, 2, 4, 5, 6, 7, 9, 10, 11, 12], 4)); //2
/*
 Example input: [1,2,4,5,6,7,9,10,11,12]
            --> length = 10, target = 4
*/

function binarySearchRecursive(arr, value, left = 0, right = arr.length - 1) {
  //base case
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === value) return middle;

  if (arr[middle] < value) {
    return binarySearchRecursive(arr, value, middle + 1, right);
  } else {
    return binarySearchRecursive(arr, value, left, middle - 1);
  }
}
console.log(binarySearchRecursive([1, 2, 4, 5, 6, 7, 9, 10, 11, 12], 4)); //2
