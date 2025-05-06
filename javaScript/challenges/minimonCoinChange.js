/*
    5️⃣ CHALLENGE 5: Minimum Coin Change Problem
    ---------------------------------------------
    Given an array of coin denominations 'coins' and a target amount 'amount', write a function to calculate the minimum number
    of coins required to make up the target amount. If it's not possible to form the amount with the given coins, return -1

    Examples - 
        Input: coins = [1,2,5], amount = 11
        Output: 3
        Explanation: 11 can be formed using three coins: 5 + 5 + 1

        Input: coins = [2], amount = 3
        Output: -1
        Explanation: It's not possible to form 3 with the given coins

        Input: coins = [1], amount = 0
        Output: 0
        Explanation: No coins are needed to form 0

        Dynamic Programming Approach:
*/

const coinChange = (coins, amount) => {
  const minCoins = new Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }

  //if the target amount is still Infinity, return -1, it means it's impossible to make the amount
  return minCoins[amount] === Infinity ? -1 : minCoins[amount];
};

console.log(coinChange([1, 2, 5], 11)); //3
//time complexity: O(n * m) where n is the amount and m is the number of coins
//space complexity: O(n)

/*
  create array to store the min number of coins for each amount
  --> the amount would be the index
  --> e.g. minCoins[7] value would be the min coins for the amount 7p
  --> init index 0 in the array to be 0 (0 coins need to make 0p)
  --> init all other array values to Infinity to begin with

  loop through each coin
  --> for each coin, update the array for every amount
  --> for each coin, initialize i to be the coin value
  --> update the minCoins array positions when you find lower values

  if the target amount remains unreacheable (Infinity), return -1
  otherwise, return the valeu at the target amount in the array


  example:
  -->[1,5] 9p
  -->[0, inf, inf, inf, inf, inf, inf, inf, inf, inf]
  -->[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  --> we start at 5 
  --> inside the loop we grab the value at 5 and subtract 5 from it
  -->[0, 1, 2, 3, 4, 1, 2, 3, 4, 5]
*/
