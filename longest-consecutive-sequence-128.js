//128. longest consecutive sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3




// Edgecases:
// []-- > 0
// [1]-- > 1
// [1, 2, 3, 4, 5]-- > 5
// [2, 4, 6, 8, 10]-- > 1


// Brute Force
// Iterate through the array
// For each element find the next consecutive element
// Keep a track of the length of the sequence
// Continue until the sequence
//   create a new array called array
// End the sequence and start with the second number
// Compare the length of the sequence of with the previous sequence
// If the current sequence length is greater change the length of the sequence
// Return the length of the sequence


const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
const longestConsecutiveSequence = (nums) => {
  // edgecases
  if (nums.length < 1) return 0;
  if (nums.length === 1) return 1;

  // create a variable for storing length of sequence and store the first element as the start of the sequence
  let maxLengthofSequence = 0
  let lengthOfSequence = 0;
  let lastElementOfSequence = nums[0];

  // Iterate through the array
  for (let i = 1; i < nums.length; i++) {
    // If u find the next consecutive number then increase length of the sequence and change the last element of the sequence
    if (nums[i] === lastElementOfSequence++) {
      lengthOfSequence++;
      lastElementOfSequence = nums[i];
    }
    // Check if the current length of sequence is greater than previous sequence if it is greater change the maxLengthofSequence
    if (lengthOfSequence > maxLengthofSequence) {
      maxLengthofSequence = lengthOfSequence;
    }
    // if the current number is not the next number go to the next number
    else {
      continue;
    }
  }
  // Return the  length of the biggest sequence
  return maxLengthofSequence;
}


console.log(longestConsecutiveSequence(nums))


// Better Approach
const betterApproach = (nums) => {
  // Sort the input array
  const sortedArray = nums.sort((a, b) => a - b);
  // Iterate through the array in a reverse manner
  let startOfTheSequence = nums[nums.length - 1];
  let lengthOfSequence = 1
  let maxLengthOfSequence = 1
  // start looking from second last element
  for (let i = nums.length - 2; i > 0; i--) {
    // Check if the current element is lesser than the previous number
    if (nums[i] === startOfTheSequence--) {
      // If the current element is lesser than the previous number then increase the length of the sequence
      lengthOfSequence++;
    }
    //Check if length of the sequence is greater than max length of sequence
    if (lengthOfSequence < maxLengthOfSequence) {
      maxLengthOfSequence = lengthOfSequence;
    }
  }
  // Return the max length of sequence
  return maxLengthOfSequence;
}
console.log((betterApproach(nums)));