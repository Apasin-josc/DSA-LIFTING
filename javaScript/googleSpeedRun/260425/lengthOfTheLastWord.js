/* Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6. */

const lengthOfLastWord = s => {
    //built in javascript methods
    const words = s.trim().split(" ");
    return words[words.length-1].length;
};

const lengthOfLastWord1 = s => {
    let i = s.length - 1;
    let count = 0;
    while(i >= 0){
        if(s[i] === " " && count > 0){
            return count;
        }else if(s[i] !== " "){
            count++;
        }
        i--;
    }
    return count;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord1("   fly me   to   the moon  "));