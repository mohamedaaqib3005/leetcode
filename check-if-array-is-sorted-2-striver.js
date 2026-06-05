// check if array is sorted 2
// # Check if the Array is Sorted II

// # Hints
// # Company
// # Given an array nums of n integers, return true if the array nums is sorted in non - decreasing order or else false.


// # Example 1

// # Input: nums = [1, 2, 3, 4, 5]

// # Output: true

// # Explanation: For all i(1 <= i <= 4) it holds nums[i] <= nums[i + 1], hence it is sorted and we return true.

// # Example 2

// # Input: nums = [1, 2, 1, 4, 5]

// # Output: false

// # Explanation: For i == 2 it does not hold nums[i] <= nums[i + 1], hence it is not sorted and we return false.

// # Now your turn!

// # Input: nums = [1, 9, 6, 8, 5, 4, 0]

// # Output:


// # Constraints

// # 1 <= n <= 100
// # 1 <= nums[i] <= 100

// Edgecases
// []-- > true
// [1]-- > true
// [1, 2, 3, 4, 5]-- > true
// [1, 3, 3, 4, 6]-- > true
// [1, 3, 4, 5, 2]-- > false


const nums = [1, 2, 1, 4, 5];


// // Wrong approach
// const checkIfArrayIsSorted = (nums) => {

//   // Edgecases
//   if (nums.length < 2) return true;
//   // Iterate through the array
//   for (let i = 0;
//      i < nums.length;
//       i++) {
//     // check if the number is lesser than the next number and return true it first pair satisfies   ❌
//     if (nums[i] > nums[i + 1]) {
//       // if the current number is lesser than the next number return true
//       return true;
//     }
//     else {
//       // else return false
//       return false;
//     }
//   }

// }


// console.log(checkIfArrayIsSorted(nums))


//


const checkIfArrayIsSorted = () => {
  // edgecases
  if (nums.length < 2) return true;
  // Iterate through the array
  for (let i = 0; i < nums.length - 1; i++) {
    // if any element doesnt match the next element return false
    if (nums[i] > nums[i + 1]) {
      return false
    }
  }
  //  if no elements have no violations
  return true;
}


// Complexity: O(n)

// One failure is enough to prove False.
// But success requires checking everything.

// Other approach checking if all the pairs are valid;

const num = [1, 2, 1, 4, 5];

const checkArrSorted = (num) => {
  // Take care of edgecases
  if (num.length < 2) return true;

  let validElements = 0;

  // Iterate through the input array
  for (let i = 0; i < num.length - 1; i++) {
    // Check if all pairs are valid i.e next element is greater or equal to previous element not lesser which violates it from being sorted in  non descending order.
    if (num[i] <= num[i + 1]) {
      validElements++;
    }

  }
  // check if all pairs are valid then it is true
  if (validElements === num.length - 1) {
    console.log("validelements", validElements);
    return true;
  }
  else {
    //if even one pair violates return false
    return false;
  }

}


console.log(checkArrSorted(num))