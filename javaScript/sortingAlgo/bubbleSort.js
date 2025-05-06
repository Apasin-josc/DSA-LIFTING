const bubbleSort = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(`new Pass`);
    let swap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    console.log(arr);
    if (!swap) {
      console.log(`no swaps needed, breaking early`);
      break;
    }
  }
  return arr;
};

//console.log(bubbleSort([4, 2, 7, 1, 5]));
console.log(bubbleSort([1, 2, 3, 4, 5, 7, 6]));
//O(n^2) time complexity --- best case O(n) when the array is already sorted
//O(1) space complexity
//to exit early when no swaps are needed we can use a flag
