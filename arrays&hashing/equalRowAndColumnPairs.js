/* 2352. Equal Row And Column Pairs

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that 
row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the 
same order (i.e., an equal array). 

Example 1 :

[3, 2, 1]
[1, 7, 6]
[2, 7, 7]

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2 :

[3, 1, 2, 2]
[1, 4, 4, 5]
[2, 4, 2, 2]
[2, 4, 2, 2]

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
*/

const equalPairs = (grid) => {
  let rowMap = new Map();
  let count = 0;
  let n = grid.length;

  //rows
  for (let i = 0; i < n; i++) {
    const rowStr = grid[i].join(',');
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }

  //columns + comparing with the rows
  for (let j = 0; j < n; j++) {
    let col = [];
    for (let i = 0; i < n; i++) {
      col.push(grid[i][j]);
    }
    console.log(col);
    let key = col.join(',');
    if (rowMap.has(key)) {
      count += rowMap.get(key);
    }
  }
  return count;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);

console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ])
);
