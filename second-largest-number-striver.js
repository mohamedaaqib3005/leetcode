// second largest number in array striver
// < !--Given an array of integers nums, return the second - largest element in the array.If the second - largest element does not exist, return -1.


// Example 1

// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

// Explanation:

// The largest value in nums is 8, the second largest is 7

// Example 2

// Input: nums = [10, 10, 10, 10, 10]

// Output: -1

// Explanation:

// The only value in nums is 10, so there is no second largest value, thus - 1 is returned

// Constraints

// 1 <= nums.length <= 105
//   - 104 <= nums[i] <= 104
// nums may contain duplicate elements. -- >


// Edgecases

// []--> null
// [one element]--> one element
// [all same element]--> -1


const nums = [7, 7, 2, 2, 10, 10, 10]
const secondLargestNumber = (nums) => {
  if (nums.length == 0) return null;
  if (nums.length == 1) return nums[0];
  // Sort the input array
  const sortedArray = nums.sort((a, b) => a - b);
  // Find the last index of the array
  const lastIndex = sortedArray.length - 1
  // Edgecase
  if (sortedArray[0] === sortedArray[lastIndex]) return -1;
  // Initialise max
  let max = sortedArray[lastIndex];
  // Iterate the sortedArray
  for (let i = lastIndex; i > 0; i--) {
    // If the left element is lesser than then it is second largest
    if (max > sortedArray[i]) {
      return sortedArray[i]
    }
  }
}

console.log(secondLargestNumber(nums))