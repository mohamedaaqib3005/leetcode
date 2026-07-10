// Two sum -striver
// [] target = 5 -- > -1;
// [2] target = 2-- > -1;
// [2, 7, 11, 9, 15], target = 9 -- > [0, 1];
// [3, 2, 4], target = 6  -- > [1, 2]
// [3, 3], target = 6 -- > [0, 1]

// Brute Force
// Iterate through array
// Have an inner loop within it to add to the outer loop element
// check if sum is equal to target
// if its equal to the target then return the indices


// Brute force method
const nums = [2, 11, 15, 7]; target = 9;
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let currentSum = nums[i] + nums[j];
//       if (currentSum === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// console.log(twoSum(nums, target))


// Time Complexity : 0(n^2)


// can we do it better
// Optimal solution:
const twoSum1 = (nums, target) => {
  // Create array of arrays with index and values of elements
  const inputArray = [...nums.entries()];
  // Sort the array of arrays based on values in ascending order
  const sortedInputArray = inputArray.sort((a, b) => a[1] - b[1])
  let lastIndex = sortedInputArray.length - 1;
  //  Create two pointers left and right
  //  left starts at 0 index and right starts at lastindex
  let left = 0;
  let right = lastIndex;

  // Loop until left is lesser than right
  while (left < right) {
    // create a variable called sum which is the sum of value of the left and right indices
    let Sum = sortedInputArray[left][1] + sortedInputArray[right][1];
    // Check if sum is equal to target
    if (Sum === target) {
      // Return  the index from the input array of the values which on adding gives target
      return [sortedInputArray[left][0], sortedInputArray[right][0]];
    }
    // check if the sum is lesser than target
    else if (Sum < target) {
      // move the left pointer the forward
      left++;
    }
    else {// check if the sum is greater than target
      // move  the right pointer backward
      right--;
    }
  }
  // fallback
  return [];
}


console.log(twoSum1(nums, target))

// Time Complexity
// nums.entries()-- > n
// spread operator-- > n
// sorting-- > n log n
// while loop-- > n

// Time Complexity = 3n + n log n ~ = n log n because they are significantly lower than nlogn

// Space Complexity:
//  input array in form of array of arrays --> n
// sortedarray --> n
// resultarray --> n

// Space Compexity = 3n ~= n which O(n)


// Learnings
// nums.entries returns a iterator which is a lazy generator of array pairs
// we can sort an array of arrays also based on the value inside the inner array
// there is no better way of getting the last index rather than arr.length -1 there no array.lastIndex built function
