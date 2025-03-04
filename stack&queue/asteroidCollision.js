/* 735. Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its 
direction (positive meaning right, negative meaning left). 
Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10. */

const asteroidCollision = (asteroids) => {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    //current asteroid
    const asteroid = asteroids[i];
    //current asteroid equal last asteroid
    const last = stack[stack.length - 1];
    //if stack is not empty there's no risk of collision
    //if last is less than zero (is negative <-), the new asteroid is not going to collide
    //if the actual asteroid is more than zero (is positive ->), the new asteroid won't collide with the last of the stack
    //5,10 are added directly but the -5 is not added because it can collide with the 10
    if (!stack.length || last < 0 || asteroid > 0) {
      stack.push(asteroid);
    } else if (-asteroid === last) {
      //case were the asteroids collide and explode both
      stack.pop();
    } else if (-asteroid > last) {
      //if the actual asteroid is greater than the last one, then the last one is going to explode so we pop it
      stack.pop();
      i--;
    }
  }
  return stack;
};

console.log(asteroidCollision([5, 10, -5]));
