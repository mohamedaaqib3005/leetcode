// Move all zeroes to the end of the array

// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.


// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
// Input : 1,2,0,1,0,4,0
// Output: 1,2,1,4,0,0,0
// Explanation : All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Edgecases:
// []-->[];
// [0]-->[0];
// [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1] -->[1,1,2,3,4,0,0,0]
// [0, 0, 0, 1, 3, -2] --> [1, 3, -2, 0, 0, 0]

// Brute Force
// Iterate through the array
// Check if the the number is zero or non negative number
// If the number is zero push at the end
// If the number is positive unshift at the start of the array



const nums = [0, 0, 0, 1, 3, -2];
const moveZeroToEnd = () => {
  // edgecases
  let noOfZeroes = 0;
  let zeroIndicesArray = [];
  // iterate through the array
  for (let [i, num] of nums.entries()) {
    if (num === 0) {
      noOfZeroes++;
      zeroIndicesArray.push(i);
    }
  }
  // remove zeroes
  for (let i = zeroIndicesArray.length - 1; i >= 0; i--) {
    nums.splice(zeroIndicesArray[i], 1);
  }
  // move zeroes in the end
  for (let i = 0; i < noOfZeroes; i++) {
    nums.push(0);
  }
}


console.log(moveZeroToEnd(nums))
