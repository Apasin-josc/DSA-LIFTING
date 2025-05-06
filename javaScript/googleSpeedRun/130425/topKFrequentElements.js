const topKFrequentElements = (nums, k) => {
    //tenemos un map de los numeros con su respectiva frequency
    const numbersMap = new Map();
    //populating my map
    for(let num of nums) numbersMap.set(num, (numbersMap.get(num) || 0) + 1);


    
};

console.log(topKFrequentElements([1,1,1,2,2,3], 2));