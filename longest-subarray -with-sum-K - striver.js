// <!-- Longest subarray with sum K - striver

// Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.


// Example 1

// Input: nums = [10, 5, 2, 7, 1, 9],  k=15

// Output: 4

// Explanation:

// The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. This sub-array starts at index 1 and ends at index 4, and the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.

// Example 2

// Input: nums = [-3, 2, 1], k=6

// Output: 0

// Explanation:

// There is no sub-array in the array that sums to 6. Therefore, the output is 0.

// <!-- Edgecases -->
// <!-- []-->0
// [1,2,3,4],k=2--> 1
// [-3, 2, 1], k=6 -->0
// [2,8,6,3],k=19-->4 -->
// <!--
// Brute Force
// Iterate through the input array
// create a compliment variable
// keep adding the numbers until u get the compliment - -->

const nums = [10, 5, 2, 7, 1, 9]; k = 15;
const longestSubArray = (nums, k) => {
    // edgecases
    if (nums.length < 1) return 0;
    if (nums.length === 1 && nums[0] === k) return 1
    //    Intialise longestcount
    let longestcountofelements = 0;
    //Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        //  Intialise current sum for each subarray
        let currentSum = 0;
        // Iterate through the array extend the subarray
        for (let j = i; j < nums.length; j++) {
            // keep on adding the elements to current sum
            currentSum += nums[j];
            // check if the sum of the subarray equals k
            if (currentSum === k) {
                longestcountofelements = Math.max(longestcountofelements, j - i + 1)
            }
        }
    }
    return longestcountofelements;
}

console.log(longestSubArray(nums, k));

// Complexity : O(n2)


// Learnings
// subarrays problems-- for i = 0
// subarray problems-- nested loops
// never forget to reset current sum
// the subarray can only be i