/* You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity. */
/* Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true */

const searchMatrix = (matrix, target) => {
    
    //OJITO
    /* console.log(matrix.flat()); */ //PERO EL ESPACIO SE VUELVE UN O(M * N)
    let left = 0;
    let right = matrix.length-1;

    while(left<=right){
        
        //hay que entrar en la primera matriz y hacer el fucking search algorithm BS
        if(matrix[left] ){
            let i = 0;
            let j = matrix[left].length - 1;
            
            let middle = Math.floor( (i+j) / 2);

            if(matrix[left][middle] === target) return true;

            if(matrix[left][middle] < target){
                i = middle + 1;
            }else{
                j = middle - 1;
            }
        }
        left++;
    }
    return false;
};
//my solution with O (log(M) + Log(N));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));


const searchMatrix2 = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0, right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        let value = matrix[row][col];

        if (value === target) return true;
        else if (value < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};
