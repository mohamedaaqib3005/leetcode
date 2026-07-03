
// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.


// Edgecases
// []-- > 0
// [1]-- > 1
// [0,0,0] --> 0
// [1, 0, 0, 0, 0, 1, 1, 1]-- > 3


// Brute Force
// Iterate through the input array
// if it encounters 1 then start counting 1s
// return the count



const nums = [1, 1, 0, 1, 1, 1];
const maxConsecutiveOnes = () => {
  let count = 0;
  let maxCount = 0;
  // edgecases
  if (nums.length < 1) return 0;
  //Iterate through the array
  for (let num of nums) {
    // check if the number is 1
    if (num === 1) {
      // if it is 1 increase the count
      count++;
      // change the value of maxCount to the higher among maxCount and count
      // if (count > maxCount) {
      //   maxCount = count;
      // }
      maxCount = Math.max(maxCount, count)
    }
    // if number is 0 stop counting 1
    if (num === 0) {
      count = 0
    }
  }
  // Return max count of consecutive ones
  return maxCount;
}


console.log(maxConsecutiveOnes())

// Time Complexity - O(n)
// Space Complexity: O(1)