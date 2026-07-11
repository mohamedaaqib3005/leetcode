// //Sort an array of 0's 1's and 2's

// Given an array nums consisting of only 0, 1, or 2. Sort the array in non - decreasing order.



// The sorting must be done in -place, without making a copy of the original array.


//   Example 1

// Input: nums = [1, 0, 2, 1, 0]

// Output: [0, 0, 1, 1, 2]

// Explanation:

// The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// Example 2

// Input: nums = [0, 0, 1, 1, 1]

// Output: [0, 0, 1, 1, 1]

// Explanation:

// The nums array in sorted order has 2 zeroes, 3 ones and zero twos



// //Edgecases
// []-- > []
// [1]-- > [1]
// [0, 2, 0, 1, 2, 1]-- > [0, 0, 1, 1, 2, 2]

// Brute Force
// Create new variables called 1s count ,2s count and 0s count
// Iterate through the array
// If u find any 1s or 2s or 0s increase the value of the variables
//

const nums = [1, 0, 2, 1, 0];
const sortAnArray = (nums) => {
  const lastIndex = nums.length - 1;
  // Iterate through array
  for (let i = 0; i < nums.length; i++) {
    // Check if number is 2
    if (nums[i] === 2) {
      if (i !== lastIndex) {
        //Remove the element
        nums.splice(i, 1);
        // Push the element at the end
        nums.push(2);
        // Move the iterator one index behind
        console.log("nums", nums)
        console.log("test")
        i--;
      }
      else {
        //Remove the element
        nums.splice(i, 1);
        // Push the element at the end
        nums.push(2);
        // Move the iterator one index behind
        console.log("nums", nums)
        console.log("test")
      }
    }
    // check if number is 0
    if (nums[i] === 0) {
      console.log("found 0")
      // Remove the element
      nums.splice(i, 1);
      //Add the element at the start
      console.log("num before adding at start", nums[i])
      nums.unshift(0);
      // Move the iterator one index behind
      i--;
      console.log("num after shifting", nums[i])
      console.log("i", i)
      console.log(nums, "foundzeromodifiedarray")
    }
  }
  // Return the mutated input  array
  return nums
}


console.log(sortAnArray(nums))
// This is not a good approach


// Better approach(correct Brute Force)
const sortAnArraywith3numbers = (nums) => {
  let count0 = 0; count1 = 0; count2 = 0;

  // Count all no of 0s ,1s,2s
  for (let num of nums) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }
  //  Add zeros for the numbers times zeros exist in the array at index 0
  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }
  //  Add ones for the numbers times ones exist in the array at index after zeroes end

  for (let i = count0; i < count1; i++) {
    nums[i] = 1;
  }
  //  Add twos for the numbers times two exist in the array at index after ones end

  for (let i = count1; i < count2; i++) {
    nums[i] = 2;
  }
  // Return modified input array
  return nums
}

console.log(sortAnArraywith3numbers(nums))




// Learnings:
// cannot do i++ or i-- in nums.entries()
// Avoid changing its size while you are iterating over it
// • Avoid changing the size of an array (splice, shift, unshift) while iterating over it.
// • A good algorithm should make measurable progress after every iteration.
// • If an operation leaves the array unchanged (like removing and re-adding a 2 already at the end), the algorithm can get stuck.
// • Swapping values is usually safer than removing and inserting elements because it doesn't change array indices.




