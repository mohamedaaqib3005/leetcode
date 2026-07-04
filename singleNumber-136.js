// 136.Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Edgecases
// //[]-->0
// //[0]->1
// //[4,2,2,3,3,3] -->4

// // Brute Force
// Iterate through the input array
// Check if the number occurs once
// Return the number

const nums = [4, 1, 2, 1, 2];
const singleNumber = (nums) => {
  // edgecases
  if (nums.length < 1) return 0;
  if (nums.length === 1) return nums[0];
  // create a hashmap for storing frequencies
  let frequencies = {}
  // iterate through the input array
  for (let num of nums) {
    // if the number already exists in the increase the value by one if u encounter it
    if (num in frequencies) {
      frequencies[num]++;
    }
    else {
      // if u encounter the number only once then add 1 as value
      frequencies[num] = 1;
    }
  }
  // create a new hashmap for lookup
  let lookup = {}
  // iterate through the frequencies hashmap
  for (let num in frequencies) {
    // reverse the mapping and convert keys into number
    lookup[frequencies[num]] = Number(num)
  }
  //  Return the element which has frequency of only 1
  return lookup[1]
  //   for (let num in frequencies) {
  //     if (frequencies[num] === 1) {
  //         return Number(num);
  //     }
  // }
}


console.log(singleNumber(nums))


// Complexity:
// Time: O(n)

// Space: O(n)

// Learnings

// • Objects are NOT iterable.
//   - for...of cannot be used directly on plain objects.
//   - It throws: TypeError: object is not iterable.

// • Use for...in to iterate over object keys.

// • Use for...of with:
//   - Object.keys(object)    → keys
//   - Object.values(object)  → values
//   - Object.entries(object) → [key, value] pairs

// • Object keys are always strings, even if they look like numbers.

// • Convert object keys back to numbers when needed.
//   - Number(key)
//   - parseInt(key)

// • for...in returns keys (or array indexes).

// • for...of returns values of an iterable.

// • Object.entries() is useful when both key and value are needed.

// • Frequency maps are usually stored as:
//     element → frequency

// • Mapping frequency → element is only safe in this problem because the problem guarantees exactly one element has frequency 1.

