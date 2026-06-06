// 1752. Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.



// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].
// Example 2:

// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
// Example 3:

// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100



// Edgecases:
// []-->true
// [1]--> true
// [1,1]-->true
// [1,2,3,4,5]-->true
// [5,1,2,3,4]--> true
// [2,3,4,4,5,1,2]--> true

// // Brute Force :
// Iterate through the input array
// check if the nums[i] is lesser than nums[i + 1] and so on till nums[n - 1]
// if the element is greater than the

const nums = [6, 7, 2, 3, 4, 4, 5, 1, 2];

const checkIfArrayIsSorted = (nums) => {
  // take care of the edgecases
  if (nums.length < 2) return true;
  //  iterate through the array
  for (let i = 0; i < nums.length - 1; i++) {
    // check if any element is violating the sorted pair pattern
    if (nums[i] > nums[i + 1]) {
      // if the curent element is greater than the next element it means that it might be rotated and that subarray should go back at the end
      // if the element is greater than next element
      const rightPart = nums.slice(i + 1); //slice from i+1 till the end of the array
      // slice creates a new sliced copy from the input array without modifying the original array
      console.log("rightPart", rightPart);
      const leftPart = nums.slice(0, i + 1) ///slice from 0 index till i index
      console.log("leftPart", leftPart);
      // slice the subarray till the current element  and push it at the end of the array
      const rebuiltArray = [...rightPart, ...leftPart];
      console.log("rebuiltArray", rebuiltArray)
      // again iterate and check if the array now has any element that violates the sorting pattern
      for (let j = 0; j < rebuiltArray.length - 1; j++) {
        if (rebuiltArray[j] > rebuiltArray[j + 1]) {
          return false;
        }
      }
      return true;
    }

  }
  // if it doesnt violate then return true
  return true;

}
console.log(checkIfArrayIsSorted(nums));