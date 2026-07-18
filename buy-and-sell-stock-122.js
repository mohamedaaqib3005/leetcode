// //121.Best Time to Buy and Sell Stock

// // Given an array arr of n integers, where arr[i] represents price of the stock on the ith day.Determine the maximum profit achievable by buying and selling the stock at most once.



// // The stock should be purchased before selling it, and both actions cannot occur on the same day.


// //   Example 1

// // Input: arr = [10, 7, 5, 8, 11, 9]

// // Output: 6

// // Explanation: Buy on day 3(price = 5) and sell on day 5(price = 11), profit = 11 - 5 = 6.

// // Example 2

// // Input: arr = [5, 4, 3, 2, 1]

// // Output: 0

// // Explanation: In this case, no transactions are made.Therefore, the maximum profit remains 0.

// Edgecases:
// []-- > 0;
// [1, 1, 1, 1, 1]-- > 0;
// [-4, -5, -1, -3]-- > 0
// [6, 1, 2, 5, 8, 3]-- > 7

// // Brute Force
// Iterate through the input array
// Consider price on each day as buy price
// And loop again to make price other days as sell price
// Check which pair gives maximum profit
// Return the maximum profit


// Optimal Approach
const nums = [3, 8, 1, 4, 6, 2];
const buyAndSellStock = (nums) => {
  // Create two variables maxProfit and currentBuyPrice
  let currentBuyPrice = input[0]; let maxProfit = 0;
  // Iterate through the array
  for (i = 1; i < nums.length; i++) {
    // Check if the different between current price and currentBuyPrice is greater than the current maxProfit
    if (input[i] - currentBuyPrice > maxProfit) {
      maxProfit = input[i] - currentBuyPrice;//Reassign maxProfit with new difference
    }
    if (input[i] < currentBuyPrice) {
      // if the current price is lesser than current Buy price change the current buy price to current price
      currentBuyPrice = input[i];
    }
  }
  // Return maxProfit
  return maxProfit
}


console.log(buyAndSellStock(nums))

// Time complexity: O(n)
// Space complexity: O(n)