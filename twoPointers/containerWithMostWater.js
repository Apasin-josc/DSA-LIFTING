/*     11. Container With Most Water
    
    You are given an integer array height of length n. There are n vertical lines drawn such that the two 
    endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.

    Example : 1
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
    In this case, the max area of water (blue section) the container can contain is 49. 

    Example : 2
    Input: height = [1,1]
    Output: 1
*/

const maxArea = (height) => {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let currentHeight = Math.min(height[i], height[j]); //getting the lower height
    let currentWidth = j - 1; //distance between the pointers
    let area = currentHeight * currentWidth; //formula

    maxArea = Math.max(maxArea, area);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

/*

we know that the max height is the 8, but it cannot spill water so 8-1 = 7 times 7 = 49

width,height = {
                1:1
                2:8 *
                3:6
                4:2
                5:5
                6:4
                7:8
                8:3
                8:7 *
            }



*/
