// Left Rotate Array by one

// < !--Given an integer array nums, rotate the array to the left by one.





//   Example 1

// Input: nums = [1, 2, 3, 4, 5]

// Output: [2, 3, 4, 5, 1]

// Explanation:

// Initially, nums = [1, 2, 3, 4, 5]

// Rotating once to left -> nums =[2, 3, 4, 5, 1]

// Example 2

// Input: nums = [-1, 0, 3, 6]

// Output: [0, 3, 6, -1]

// Explanation:

// Initially, nums = [-1, 0, 3, 6]

// Rotating once to left -> nums =[0, 3, 6, -1]



// Constraints

// 1 <= nums.length <= 105
//   - 104 <= nums[i] <= 104 -- >


//Edgecases
// []-- > []
// [1]-- > [1]
// [1, 1, 1, 1]-- > [1, 1, 1, 1, 1]
// [-1, 6, 3, 0, 8, 3]-- > [6, 3, 0, 8, 3, -1]


// //Bruteforce
// Iterate through the array
// change position of each element in the array
// return the new array


const nums = [1, 2, 3, 4, 5]
const leftRotateArraybyOne = (nums) => {
  //Create a new array
  const leftRotatedArray = [];
  // Iterate through the array
  for (let i = 1; i < nums.length; i++) {
    // Check if the i is the last index
    // if (i === nums.length - 1) {
    // if it is the last index then the add the first index of nums to the end of leftrotatedarray
    // leftRotatedArray.push(nums[0])
    // }
    // else {
    leftRotatedArray.push(nums[i]);
    // }
  }
  // add the first element in the end after all the elements
  leftRotatedArray.push(nums[0]);
  console.log("leftRotatedArray", leftRotatedArray);
  // return the new array
  return leftRotatedArray;
}


leftRotateArraybyOne(nums)

// Time Complexity
// O(n)