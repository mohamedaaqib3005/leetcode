// Left Rotation Hackerank


// Edgecase
// []-- > []
// [1]-- > [1]
//   [1, 2], d = 3 -- > [2, 1]
//   [1, 2, 4], d = 1 -- > [2, 4, 1]

const nums = [1, 2, 3, 4, 5];
const d = 4;

const leftRotation = (nums, d) => {
  // Loop through the arr until d iteration
  for (let i = 0; i < d; i++) {
    // Remove the element from arr to be rotated
    // Push it at the end
    nums.push(nums.shift())
  }
  // Return the rotated array
  return nums
}


leftRotation(nums, k)