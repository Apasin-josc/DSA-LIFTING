/*
    Frequency Counter
        - good for comparisons, duplicates, patters in data
*/

const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let frequency = {};
  for (const char of str1) frequency[char] = (frequency[char] || 0) + 1;
  for (const char of str2) {
    if (!frequency[char]) return false;
    frequency[char]--;
  }
  return true;
};

console.log(areAnagrams("asleep", "please")); //true
//time complexity of O(n)
//space complexity of O(n)
/*
    frequency[str1]:
        {
            a: 1,
            s: 1,
            l: 1,
            e: 2,
            p: 1
        }
*/
