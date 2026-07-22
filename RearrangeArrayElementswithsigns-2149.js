// < !-- // 2149.Rearrange array elements by sign

// < !--You are given a 0 - indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the array follows the given conditions:

// < !-- --> Every consecutive pair of integers have opposite signs.
// --> For all integers with the same sign, the order in which they were present in nums is preserved.
// --> The rearranged array begins with a positive integer.
// --> Return the modified array after rearranging the elements to satisfy the aforementioned conditions. -- >

// < !--Edgecases -->
// []-- > []
// [0]-- > [0]
// [0, -1, -2, 3]-- > [0, -1, 3, -2]
// [1, 2, 3, 4]-- -> [1, 2, 3, 4]
// [-1, -2, -4, -3, 0, 1, 5, 3]-- -> [0, -1, 1, -2, 5, -4, 3, -3]



// Brute Force
// Check what is the length of nums array
// Create a new array
// Iterate through the input array
// If u find a positive number push in new array
// if u find a negative number

const nums = [3, 1, -2, -5, 2, -4];
const RearrangeArrayElementsWithSigns = () => {
  const sizeOfInputArray = nums.length;
  const positiveElementsArray = [];
  const negativeElementsArray = [];
  const resultArray = [];
  for (let num of nums) {
    // Check if the num is negative push to negativeelements array
    if (num < 0) negativeElementsArray.push(num)
    // Check if the num is positive push to positiveelements array
    if (num >= 0) positiveElementsArray.push(num)
  }
  for (let i = 0; i < sizeOfInputArray / 2; i++) {
    // add all even index as the values from positive array/ Take the next positive number and place it in the next even index.
    resultArray[2 * i] = positiveElementsArray[i];
    // add all even index as the values from positive array /Take the next negative number and place it in the next odd index.
    resultArray[2 * i + 1] = negativeElementsArray[i];
  }
  // Return the resultArray
  return resultArray;
}

console.log(RearrangeArrayElementsWithSigns(nums))



// Alternative approach

// let positiveIndex = 0
// for (let i = 0; i < result.length; i++) {
//   result[i] = positive[positiveIndex];

//   positiveIndex++;
// }
// let negativeIndex = 0
// for (let i = 0; i < result.length; i++) {
//   result[i] = negative[negativeIndex];

//   negativeIndex++;
// }


// // Alternative approach
// for (let i = 0; i < result.length; i++) {
//   if (i % 2 === 0) {
//     // even index
//   }
//   else {
//     // odd index
//   }
// }

// Time Complexity: O(n)
// Space Complexity: O(3n) ~= O(n)


// can we do better dont u think the we dont need to have 3 arrays we can do it with only one array


