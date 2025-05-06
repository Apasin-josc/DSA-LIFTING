/* 394. Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being 
repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets 
are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that 
digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 10^5.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef" */

// k = how many times we repeat stuff
// [ = now i need to start storing what i want to repeat
// ] = better start repeating .repeat()

const decodeString = (s) => {
  let stackNums = [];
  let stackStrs = [];
  let currentNum = 0;
  let currentStr = "";

  // 3[a2[c]]

  for (let char of s) {
    if (!isNaN(char)) {
      currentNum = `${currentNum}${char}`; //3
    } else if (char === "[") {
      stackNums.push(currentNum); //3
      stackStrs.push(currentStr); // ['']
      currentStr = "";
      currentNum = 0;
    } else if (char === "]") {
      //when we're closing the brackets, we process what's inside
      let num = stackNums.pop();
      let prevStr = stackStrs.pop();
      //starting to construct the current str with the k number of repeat times
      currentStr = prevStr + currentStr.repeat(num);
      //currentStr = stackStrs.pop() + currentStr.repeat(stackNums.pop());
    } else {
      //if it's just a character
      currentStr += char;
    }
  }
  return currentStr;
};

console.log(decodeString("3[a]2[bc]")); //aaabcbc
console.log(decodeString("3[a2[c]]"));
