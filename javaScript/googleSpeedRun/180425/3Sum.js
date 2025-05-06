/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0. */

const threeSum = nums => {
    if(nums.length === 0) return 0;

    nums = nums.sort((a,b) => a-b);

    let res = [];

    for(let i = 0; i < nums.length - 2; i++){
        //stop duplicates
        if(i > 0 && nums[i] === nums[i-1]) continue;
        
        //two pointers technique
        let j = i+1;
        let k = nums.length-1;

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0){
                res.push([nums[i], nums[j], nums[k]]);
                //stop duplicates
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k+1]) k--;
                j++;
                k--;
            }else if (sum < 0){
                j++;
            }else{
                k--;
            }
        }
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));

/* first we need to sort the array to have a 
[-4, -1, -1, 0, 1, 2]

i,   j ,           k        = -4 -1 + 2 = -3 < 0 //we can move j
i,       j,        k        = -4, -1 + 2 = -3 < 0 //we can move j
i,           j     k        = -4, 0, 2 = -2 < 0 // we can move j
i,              j  k        = -4, 1, 2, = -1 < 0 //we can move now i
     i   j         k        = -1, -1, 2 = 0 //WE CAN PUSH this value into res res= [[-1,-1,2]]
//WE NEED to check on duplicates
//while nums[j] = nums[j+1] continue; if it isn't we just increment j
    i       j      k        = -1, 0, 2 = 1 // we can decrement k now
    i       j   k           = -1,0,1   = 0 //WE CAN PUSH THIS TO THE RES res = [[-1,-1,2], [-1,0,1]]
//at this point k can't decrement more so we increment i
         i  j   k //AT THIS point we need to check if i is equal as i-1, because if they're the same we're going to have a duplicate
         //if that's true we need to move forward
            i   j  k //here there's no more answer so we return res;
T: On^2
S: O1 
 */