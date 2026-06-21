//189. Rotate Array


//Edgecases
// []-- > [];
// [1, 2, 3, 4, 5], k = 2 -- > [4, 5, 1, 2, 3];
// [1]-- > [1];





//Brute Force
// Create a new array rotated array
//  Iterate through the array in a reverse manner;
//  move till nums.length - 3;
//  Push the elements into rotated array
// return the rotated array


const nums = [1, 2, 3, 4, 5, 6, 7]; k = 3;
const rotateArray = (nums, k) => {
  const rotatedArray = [];
  const lastElement = nums.at(-1);
  const secondLastElement = nums.at(-2)
  const thirdLastElement = nums.at(-3)
  rotatedArray.splice(0, 0, thirdLastElement)

  rotatedArray.splice(1, 0, secondLastElement)

  rotatedArray.splice(2, 0, lastElement)

  for (let i = 0; i < nums.length; i++) {

    rotatedArray.push(nums[i]);
  }
  console.log("rotatedArray", rotatedArray);
  return rotatedArray;
}


console.log(rotateArray(nums, k))
//[ 7, 6, 5 ]



// Cleaner Brute Force solution
var rotate = function (nums, k) {
  // if k is greater than nums.length it doest make sense to rotate k it is inefficient
  k = k % nums.length;
  // Iterate through the array for k times
  for (let i = 0; i < k; i++) {
    // remove the last element and add to the start of the array
    nums.unshift(nums.pop())
  }
};