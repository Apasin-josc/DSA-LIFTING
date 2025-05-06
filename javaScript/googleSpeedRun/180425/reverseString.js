/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"] */

const reverseString = string => {
    let i = 0;
    let j = string.length - 1;
    while( i < j){
        [string[i], string[j]] = [string[j], string[i]];
        i++;
        j--;
    }
    return string;
};

console.log(reverseString(["h","e","l","l","o"]));