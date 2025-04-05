const dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++){
        //here we compare the temperature from the actual day with the temperature stored on the stack index
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); //output [1,1,4,2,1,1,0,0]
//array.length = 8