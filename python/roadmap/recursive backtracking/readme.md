PSEUDOCODE of backtracking algo

function backtracking(state):
    if state is a solution:
        return state
    
    for choice in all possible choices:
        if choice is valid:
            make choice
            result = backtracking(state with choice)
            if result is not failure:
                return result
            undo choice
    return failure


#🗝️ 3 Keys to backtracking 🗝️#

[1] Choice 

the core choice that we're making at each step
we need to fill the cells by making *choices*
A cell seats on a row and a column
solve(row, col ...){
    //we can place numbers from 1 - 9 if the cell is empty
    if(col == board[row].length){
        
    }

    for(int value = 1; value <= 9; value++){
        board[row][col] = value;
        if(validPlacement(row, col ...)){
            if(solve(row, col+1, board)){
                return true;
            }
        }
    }
}


[2] Contraints


[3] Goal