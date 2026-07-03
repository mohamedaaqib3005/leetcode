// Find missing number

// iven an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only number missing from the array within this range.


// Example 1

// Input: nums = [0, 2, 3, 1, 4]

// Output: 5

// Explanation:

// nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]

// Example 2

// Input: nums = [0, 1, 2, 4, 5, 6]

// Output: 3

// Explanation:

// nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as the only missing number in the range [0, 6]

// // Edgecases
// []-->[]
// [0]-->1 (0,1) so 1 is missing
// [1,2,3,4]-->0
// [0,1,2,3]-->4


function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

// Brute Force
// Find the length of the input array
// Iterate through the input array
// check if the current element is present in the range using the range function
// if not return the missing number

const nums = [1, 2, 3, 4]
const findMissingNumber = (nums) => {
  let start = 0;
  let end = nums.length;
  // convert input array into hashmap
  const numsObject = Object.fromEntries(nums.map(num => [num, true]));

  // create range from the input array
  const rangeArray = range(start, end);

  // Iterate through the range array
  for (let element of rangeArray) {
    // lookup for the element in the numsObject
    if (!(element in numsObject)) {
      return element;
    }
  }
}

console.log(findMissingNumber(nums))


// Learnings
// Object.fromEntries() expects array of array not just array
// ✔ Object.fromEntries() expects an array of [key, value] pairs.

// ✔ map() can transform every element into a [key, value] pair.

// ✔ Object.fromEntries() converts those pairs into an object.

// ✔ "key in object" checks whether a key exists.

// ✔ Object.fromEntries() runs in O(n).

// ✔ map() runs in O(n).

// ✔ Consecutive linear operations remain O(n).

// ✔ A lookup object can replace repeated linear searches.

Complexity:
O(n)