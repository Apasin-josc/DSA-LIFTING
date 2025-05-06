const selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //if we find a value smaller than the current value at i, we swap
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};
console.log(selectionSort([5, 3, 8, 4, 2]));
//O(n^2) time complexity
//O(1) space complexity
//Selection sort is better than bubble sort because it does less swaps
