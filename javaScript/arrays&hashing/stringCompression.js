/* 
443. String Compression

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths 
that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

Example 2:
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.

Example 3:
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12". 
*/

const stringCompression = (chars) => {
  //initialize write and i to 0 to keep track of the write index and the current index
  //write index will be used to write the compressed characters
  //i will be used to traverse the input array
  let write = 0;
  let i = 0;

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    //count the number of consecutive characters
    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    //write the character and the count
    chars[write] = char;
    write++;

    //if the count is greater than 1, write the count
    if (count > 1) {
      //convert the count to a string
      let countStr = count.toString();
      for (let digit of countStr) {
        chars[write] = digit;
        write++;
      }
    }
  }
  return write;
};

console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));
// [i] , [i + 1] => [0], [1] => a, a => count = 2
// [2], [3] => b, b => count = 2
// [4], [5] => c, c => count = 2
// [6] => c => count = 1
// a2b2c3
