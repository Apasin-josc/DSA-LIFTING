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


[2] Contraints


[3] Goal