/* Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]] */

const pascalsTriangle = numRows => {
    const result = [];
    if (numRows >= 1) result.push([1]);

    for (let i = 1; i < numRows; i++) {
        const prevArr = result[i - 1];
        const newRow = [1];

        for (let j = 1; j < prevArr.length; j++) {
            newRow.push(prevArr[j - 1] + prevArr[j]);
        }

        newRow.push(1);
        result.push(newRow);
    }

    return result;
};

console.log(pascalsTriangle(5));