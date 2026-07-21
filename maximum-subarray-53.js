// 53. Maximum Subarray
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, find the subarray with the largest sum, and return its sum.



//   Example 1:

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray[1] has the largest sum 1.
// Example 3:

// Input: nums = [5, 4, -1, 7, 8]
// Output: 23
// Explanation: The subarray[5, 4, -1, 7, 8] has the largest sum 23.


// Constraints:

// 1 <= nums.length <= 105
//   - 104 <= nums[i] <= 104


// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Edgecases
// [1,2,-8,7,-5]-->7
// [-6,-3,-1,-4]-->-1 (cannot be 0 it should be atleast one element not an empty)

// Brute Force:

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const getPrefixSumArray = (nums) => {
  // create an empty prefix Sum Array & Intialise the first element in the prefixSumArray
  const prefix = [0];
  //  Iterate through the input array
  for (let i = 0; i < nums.length; i++) {
    // current element in the prefix sum array is equal to sum of previous element of prefix and current element of input array
    prefix.push(prefix[i] + nums[i]);
  }
  return prefix
}


const findMaxIncreaseInArray = (prefix) => {
  let minPrefix = 0; let maxIncrease = -Infinity;
  for (let i = 0; i < prefix.length; i++) {
    if (maxIncrease < prefix[i] - minPrefix) {
      maxIncrease = prefix[i] - minPrefix
    }
    if (prefix[i] < minPrefix) {
      minPrefix = prefix[i]
    }
  }
  return maxIncrease;
}


// Optimal Approach:
const maxSubArray = (nums) => {
  //1. Calculate the prefix sum array

  const prefixSumArray = getPrefixSumArray(nums);
  //2.Find the max increase similar to Best time to buy and sell stocks
  return findMaxIncreaseInArray(prefixSumArray);
}

console.log(maxSubArray(nums))


// Time complexity: 0(n)
// Space complexity: 0(n)

// can we do better do we really need to remember all the members in prefix sum array
// can we just remember the prefix sum till current element and forget old numbers
// do we need to find the max increase if there are no negative numbers


// Optimal Solution: Kadane's Algorithm
const kadaneAlgorithm = (nums) => {
  // Create two variables currentSum and maximumSum
  let currentSum = 0; maximumSum = -Infinity;
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // check if currentsum is not negative if it is negative then we dont need to consider that sum of  subarray
    if (currentSum < 0) {
      currentSum = 0
    }
    // Creating a running sum called currentSum having sum of all the elements till now
    currentSum += nums[i];

    maximumSum = Math.max(maximumSum, currentSum);

  }
  return maximumSum;
}








