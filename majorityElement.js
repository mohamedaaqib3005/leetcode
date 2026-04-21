//return a majority element which appears more than n/2 times.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Brute Force:
const nums = [2, 2, 1, 1, 1, 2, 2]
// const majorityElements = (nums) => {
//   // loop through the array and for each element check how many elements are there in the array.
//   let count = 0
//   let n = nums.length
//   for (let num of nums) {
//     for (let i = 0; i < nums.length; i++) {
//       if (num === nums[i]) count++;
//     }
//     if (count > n / 2) return num
//   }
//   return null;
// }
// console.log(majorityElements(nums))

// output: undefined



// Time Complexity : O(n^2)
// Space Complexity: O(1)


// const majorityElement = () => {
//   const n = nums.length;
//   for (let num of nums) {
//     const numArray = nums.filter((n) => n === num)
//     const count = numArray.length;
//     if (count > n / 2) return num
//   }
// }

// console.log(majorityElement())



// Optimal solution :
// hashmap method:

const majorityElement = (nums) => {
  const hashmap = {}
  const n = nums.length;
  // Iterate through the array
  for (let num of nums) {
    // for each element add num and count as key value pair
    // check if element already there then add one to the count which is value
    if (hashmap[num]) hashmap[num] += 1
    // else add a new count
    else (hashmap[num] = 1)
    // check if the count greater the half of the given array length
    if (hashmap[num] > n / 2) return num;
  }
  return null;
}

console.log(majorityElement(nums))

// Time complexity: O(n)
// Space complexity : O(n)
// Learnings:
//math.max takes in only values not array
//object.values converts into array
// let count and count ++ return undefined
//