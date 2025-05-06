/*
 345. Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let str = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!vowelsSet.has(str[left])) {
      left++;
      continue;
    }
    if (!vowelsSet.has(str[right])) {
      right--;
      continue;
    }
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str.join("");
};

console.log(reverseVowels("IceCreAm")); //AceCreIm
