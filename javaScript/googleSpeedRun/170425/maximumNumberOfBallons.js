/* Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1: 
Input: text = "nlaebolko"
Output: 1


Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:

Input: text = "leetcode"
Output: 0
*/

const maxNumberOfBallons = s => {
    /* const balloonMap = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    }

    for(let char of s){
        balloonMap[char]++;
    }
    
    return Math.min(balloonMap.b, balloonMap.a, balloonMap.l / 2, balloonMap.o / 2, balloonMap.n); */

    const BALLOON = "balloon";
    const balloonMap = new Map();
    for(let char of BALLOON) balloonMap.set(char, (balloonMap.get(char) || 0));
    for(let char of s){
        if(balloonMap.has(char)){
            balloonMap.set(char, balloonMap.get(char) + 1);
        }
    }
    
    const countB = balloonMap.get('b');
    const countA = balloonMap.get('a');
    const countL = Math.floor(balloonMap.get('l') / 2); // l aparece 2 veces
    const countO = Math.floor(balloonMap.get('o') / 2); // o aparece 2 veces
    const countN = balloonMap.get('n');

    //returning how many times i can get the word balloon !!! with the given string !!!
    return Math.min(countB, countA, countL, countO, countN);

};

console.log(maxNumberOfBallons("nlaebolko"));