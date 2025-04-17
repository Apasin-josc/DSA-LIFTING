const twoSum = (nums, target) => {
    const seenNumbers = new Map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(seenNumbers.has(complement)){
            return [seenNumbers.get(complement), i];
        }else{
            seenNumbers.set(nums[i], i);
        }
    }
    return [];
}

console.log(twoSum([2,7,9,14], 9));