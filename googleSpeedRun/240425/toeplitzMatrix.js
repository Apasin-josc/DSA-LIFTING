/* Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Example 1: 

 ________
|1,2,3,4|
|5,1,2,3|
|9,5,1,2|
 -------

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Example 2:
Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements. */


const isToeplitzMatrix = matrix => {
    let numRows = matrix.length-1;
    let numCols = matrix[0].length-1;
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            if(matrix[i][j] !== matrix[i+1][j+1]) return false;
        }
    }
    return true;
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]));