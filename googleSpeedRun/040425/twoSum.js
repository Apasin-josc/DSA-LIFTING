const twoSum = (nums, target) => {
    const seenNumbers = new Map();

    for(let i = 0; i < nums.length; i++){
        const neededNumber = target - nums[i];
        if(seenNumbers.has(neededNumber)){
            return [seenNumbers.get(neededNumber), i];
        }else{
            seenNumbers.set(nums[i], i);
            console.log(`here goes the seenNumbers map yet`)
            console.log(seenNumbers);
        }
    }
    return [];

}
console.log(twoSum([2,7,9,11], 9));