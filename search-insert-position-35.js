// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5;
// Output: 2


// Edgecases :
// []--->[]
// the input is always sorted

// BruteForce:
// Iterate through the sorted array and compare the the value of the target with each element in the array and check which elements are greater and lesser than it
// If the the element is lesser than keep on going forward until u find an element which is greater than the target

const nums = [1, 3, 5, 6]
const searchInsertPosition = (target, nums) => {
  const lastIndex = nums.length - 1
  // Iterate through the nums array
  for (let [index, num] of nums.entries()) {
    // Check if num is greater or equal to the target provided
    if (target <= num) {
      // return the index where u want the target to be placed
      return index;
      // if there is no element greater than target place it at the end of the array
    } else if (target > nums[lastIndex]) {
      // return the index of the last index where target should be placed
      return nums.length;
    }

  }
}


//




searchInsertPosition(4, nums)



