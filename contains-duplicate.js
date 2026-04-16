// Contains Duplicate
// Easy Topics Company Tags
// Hints

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true


// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

//Edgecase:
//[]---> false
//[1]---> true //


// Brute Force :
// Iterate through the nums array and for each element check if there is any other element similar to it

const nums = [1, 2, 3, 6, 7, 9];

const duplicateArray = (nums) => {
  // edgecases
  let hashmap = {}
  if (nums.length <= 1) return false;
  // loop through the values of the nums array
  for (let num of nums) {
    // if the element is already there in the hashmap then the nums array has duplicate
    if (num in hashmap) return true;
    // if the element is not there create a new entry in the hashmap
    hashmap[num] = "present";
  }
}

console.log(duplicateArray())


//Learnings:
// for (let num of nums){
// hashmap[num] = true
// if (hashmap[num]) true
// }
// if u store and check for every element then it is a wrong mental model
// since the condition is within the loop so for every element it will check and return true
// Right mental model is just put original into another datastructure in this case hashmap or set if it is already there in the hashmap dont let it in
//if(hashmap[num]) checks value
// but we need to check if the element in this case the key is just present
// so for num in hashmap makes more sense
// if we had hashmap[num] = 0 and these
