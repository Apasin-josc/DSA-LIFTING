/* Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination. */

const combinations = (n, k) => {
    const result = [];

    function dfs(start, current) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);
            dfs(i + 1, current);
            current.pop(); // backtrack
        }
    }

    dfs(1, []);
    return result;
};


console.log(combinations(4, 2));


/* dfs(1, []) →
  push(1)
  dfs(2, [1]) →
    push(2) → [1,2] ✅
    pop()
    push(3) → [1,3] ✅
    pop()
    push(4) → [1,4] ✅
    pop()
  pop()

  push(2)
  dfs(3, [2]) →
    push(3) → [2,3] ✅
    push(4) → [2,4] ✅

  push(3)
  dfs(4, [3]) →
    push(4) → [3,4] ✅
 */