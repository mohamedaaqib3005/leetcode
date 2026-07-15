//Majority Elements1-striver
// Given an integer array nums of size n, return the majority element of the array.



// The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.


// Example 1

// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]

// Output: 7

// Explanation:

// The number 7 appears 5 times in the 9 sized array

// Example 2

// Input: nums = [1, 1, 1, 2, 1, 2]

// Output: 1

// Explanation:

// The number 1 appears 4 times in the 6 sized array


// Edgecases
// []--> null
// [1]--> 1
// [7, 0, 0, 1, 7, 7, 2, 7, 7]--> 7 because 7 appears more than 4
//  [1,5,3,6,1,4,1]



// Brute Force
// Iterate through the array
// For each element iterate again to get find the no of occurance of the element
// If the no of occurances are  greater or equal the n/2
// then it is majority element

const nums = [7, 0, 0, 1, 7, 7, 2, 7, 7];
// Brute Force Approach
const majorityElement = (nums) => {
  // Edgecases
  if (nums.length < 1) return null;
  if (nums.length === 1) return nums[0];
  //Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    //Create a variable called count to store the no of occurances
    let count = 0;
    // Again iterate through the array checking if the number repeats
    for (let j = 0; j < nums.length; j++) {
      //Check if the value in the first loop and nested loop is equal and if is equal increase the value of count
      if (nums[i] === nums[j]) count++;
    }
    // after check all elements in the nested loop and getting the occurence of an element
    // check if the count is greater than the floor of the half of the length of the input array
    if (count >= Math.floor(nums.length / 2)) {
      // Return the majority element
      return nums[i]
    }
  }
  // Fallback
  return -1;
}

// console.log(majorityElement(nums))

// Time Complexity

// Outer loop -- > O(n)

// Inner loop -- > O(n)


// Overall -- > O(n²)


// Space  Complexity
// count  -- > O(1)


// can we do better
// Yes we can do better we can do it in 0(n)


// Better Optimal : Hashmap approach
const majorityElementbetter = (nums) => {
  // Create a hashmap for this storing number and their occurances
  const majority = Math.floor(nums.length / 2);
  const frequencies = {}
  // create a variable called count
  let count = 0;
  // Iterate through input Array
  for (let num of nums) {
    // Whenever u come across the element again then increase the count variable
    if (num in frequencies) count++
    // return the element if the element is greater than the majority
    if (count > majority) return num;
    // store the count as for each key which is element
    frequencies[num] = count
  }
  // fallback
  return -1;
}

console.log(majorityElementbetter(nums))


// Learning for your notes
// Majority element means frequency > ⌊n/2⌋, not == ⌊n/2⌋.
// When counting occurrences using a nested loop, initialize count = 0 if the inner loop iterates over the entire array.
// Use count = 1 only if you've already counted the current element and your inner loop starts from i + 1.
// • A single variable can only store one count at a time.
// • Frequency problems require one count per unique element.
// • A hashmap acts like multiple counters—one counter for each unique key.
// • A local variable (count) can still be used, but it should read the previous count from the hashmap before incrementing it.
// Golden Rule ⭐
// If you start count = 1,
// you are promising that the current element has already been counted.

// Therefore, your loop must NOT count it again.
// 7. Another Golden Rule ⭐⭐⭐
// If your algorithm needs the TOTAL frequency of an element,
// you must examine EVERY occurrence.

// Never skip part of the array.
// 8. Decision Tree (Easy to Remember)
// Need total frequency?
//         │
//       YES
//         │
// count = 0
// j = 0
//         │
//         ▼
// Count every occurrence


// Need pairs/triplets?
//         │
//       YES
//         │
// count = 1 (if counting current)
// j = i + 1
//         │
//         ▼
// Avoid duplicate combinations
// One-line interview memory trick

// j = i + 1 is for avoiding duplicate combinations; j = 0 is for counting complete information.