/* Given two strings ransomNote and magazine, return true if ransomNote can be 
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true */
 
const canConstruct = (ransomNote, magazine) => {

    let magazineMap = new Map();
    for(let char of magazine) magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    for (let char of ransomNote) {
        if(!magazineMap.has(char) || magazineMap.get(char) === 0) return false;
        //usamos una letrita, ahora la quitamos para evitar bugs
        magazineMap.set(char, (magazineMap.get(char) - 1));
    }
    return true;
};

console.log(canConstruct("aa", "ab"));