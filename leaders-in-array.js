// // Leaders in an Array

// Given an integer array nums, return a list of all the leaders in the array.



// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.


// Example 1

// Input: nums = [1, 2, 5, 3, 1, 2]

// Output: [5, 3, 2]

// Explanation:

// 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

// Example 2

// Input: nums = [-3, 4, 5, 1, -4, -5]

// Output: [5, 1, -4, -5]

// Explanation:

// -5 is the rightmost element, -4 is the largest element in the index range [4, 5], 1 is the largest element in the index range [3, 5] and 5 is the largest element in the range [2, 5]


// Edgecases
// []-- > []
// [1]-- > 1
// [8, 6, 5, 4, 3, 2, 1]-- > [8, 6, 5, 4, 3, 2, 1]
// [1,2,4,6,8,9] --> null



// Brute Force :
const nums = [-3, 4, 5, 1, -4, -5];
const leadersInAnArray = (nums) => {
  // Create an array of leader elements
  const leadersArray = [];
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // For every element again iterate through the rest of the array
    let leader = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] <= nums[j]) {//check if there is any element which is greater than the current
        leader = false;
        break;// if the current element is lesser than any of the element on the right side then move to the next  element
      }
    }
    if (leader) {
      leadersArray.push(nums[i]); //if the element is greater than all the rest of elements then push it into leaders array
    }
  }
  // Return the leaders array
  return leadersArray;
}

// console.log(leadersInAnArray(nums))

// Optimal solution

const leaderInAnArray = (nums) => {
  // Create a variable called max
  const lastIndex = nums.length - 1;
  let max = nums[lastIndex];
  //Create a new array
  const leadersArray = [];
  // Iterate through the array in a reverse manner  from the second last because the last element is already a leader
  for (let i = lastIndex - 1; i > 0; i--) {
    // Check if the current element is greater than max
    console.log(i)
    if (nums[i] > max) {
      // Add the element to leadersarray
      leadersArray.unshift(nums[i])
      // If the element is greater than the max then it is definitely a max
      max = nums[i];
    }

  }
  return leadersArray;
}


console.log(leaderInAnArray(nums))


