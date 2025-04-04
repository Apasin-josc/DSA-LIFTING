const maxArea = height => {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    
    while(i < j){

        //NO AL CHAPUSON
        let currentHeight = Math.min(height[i], height[j]); //aqui sacamos esa vaina
        let currentWidth = j - i;
        let area = currentHeight * currentWidth;

        maxArea = Math.max(maxArea, area);

        if(height[i] < height[j]){
            i++;
        }else{
            j--;
        }
        
    }
    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//maxArea should be 7 * 7 = 49
/* maxArea[1] * maxArea[8]
7           * 7         =49 */