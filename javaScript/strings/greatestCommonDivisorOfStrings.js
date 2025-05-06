/*
    1071. Greatest Common Divisor of Strings
    For two strings `s` and `t`, we say `t` divides `s` if and only if `s = t + ... + t`  
    (t concatenated with itself 1 or more times).

    Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`.

    Example:
    Input: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"
*/

const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = findGCD(str1.length, str2.length);
  //calculating the gcd of the lengths of the two strings
  //returning the substring of the first string from 0 to the gcd
  return str1.slice(0, gcd);
};

const findGCD = (a, b) => {
  //base case
  if (b === 0) return a;
  return findGCD(b, a % b);
};

console.log(gcdOfStrings("ABCABC", "ABC")); //ABC

/*
    Example str1.length = 6  & str2.length = 3
    --> str1 = "ABCABC" & str2 = "ABC"
    --> str1 + str2 = "ABCABCABC"
    --> str2 + str1 = "ABCABCABC"
    --> the strings are equal
    --> the gcd of the lengths is 3
    --> return the substring of str1 from 0 to 3
    --> return "ABC"

    ---> findGCD (6, 3)
    ---> findGCD (3, 0)
    ---> return 3


    Time complexity: O(log n)
    Space complexity: O(n)
*/
