// // // Two sum

// // Easy
// // Topics
// // Company Tags
// // Hints
// // Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// // You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// // Return the answer with the smaller index first.
// // Example 1:

// // Input:
// // nums = [3,4,5,6], target = 7

// // Output: [0,1]
// // Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// // Example 2:

// // Input: nums = [4,5,6], target = 10

// // Output: [0,2]
// // Example 3:

// // Input: nums = [5,5], target = 10

// // Output: [0,1]


// // EdgeCases:
// // [3, 4, 3, 4] target: 7 ❌ // invalid input cannot contain two solutions
// // [3, 4, 3, 5, 2] target: 7 ❌ // invalid input again but can contain duplicates
// // [3, 4, 6, 8] target: 7 ✅ //valid


// //Brute Force
// const nums = [3, 4, 5, 6];

// const twoSum = (nums, target) => {
//   // let result = [];
//   // validation
//   if (nums.length <= 1) return null;

//   // iterate through the array
//   for (let i = 0; i < nums.length; i++) {
//     // for each element run a loop within the array
//     for (let j = i + 1; j < nums.length; j++) {

//       // check if the outer loop element and inner loop element sum up to target provided
//       if (nums[i] + nums[j] === target) {
//         // return result.push(i, j) // arr.push --> return the size of the array

//         // add the indices to an array and return the array
//         return [i, j];
//       }
//     }
//   }
//   // fallback case
//   return [];
// }

// console.log(twoSum(nums, 7))

// //Time Complexity : n^2;
// //Space Complexity : i and j so O(1)


// // we can do better
// const num = [3, 4, 5, 6];
// const TwoSum = (num: number[], target: number): number[] => {
//   // validation
//   if (num.length <= 1) return 0;

//   // create a hashmap
//   let hashmap = [];


//   for ([num, i] of num.entries) {
//     let complement = target - num[i]

//     if (complement in hashmap) {

//       return [i, hashmap[complement]]
//     }
//   }

// }



// TwoSum()

const nums = [3, 4, 5, 6];


console.log(nums.entries())
console.log([...nums.entries()])  // [ [ 0, 3 ], [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]

const twoSum = (nums, target) => {
  let numbers = {};


  let complement;
  for (let [index, num] of nums.entries()) {
    complement = target - num;
    if (complement in numbers) {
      return [numbers[complement], index];
    }
    numbers[num] = index;

  }


  console.log(numbers)

}

console.log(twoSum(nums, 7))

// Use[] when returning collections,
//   null for missing single values,
//     avoid explicit undefined






















// const nums = [3, 4, 5, 6];

// const twoSum = (nums, target) => {

//   if (nums.length <= 1) {
//     return null;
//   }


//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }

//   return null;


// }


// console.log(twoSum(nums, 7))


//Learning:
// always return consistent datatypes dont return null ot one place and return undefined at one place
// always do i and j <nums.length not nums.length -1 it can skip the last number
// always start j = i+1 if u do j= 1 then there is of coliding when i = 1 and also j =1
