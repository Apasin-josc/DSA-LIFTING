const linearSearch = function (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};

linearSearch([1, 2, 3, 4, 5], 3); //2
//time complexity O(n)
