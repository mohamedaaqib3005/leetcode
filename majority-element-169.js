// Majority Element

// majority element is any element which appears more than [n/2] times.


// Edgecases
// []--> [];
// [two majority]--> two majority elements;



// Brute Force
// Calculate the length of the array and find n/2
// Iterate through the array
// Create a variable for each element which stores the count of the element
// If the count is more than the n/2 then return the element

const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
const majorityElement = () => {
  // edgecases
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  // find the length of the array
  const arraySize = nums.length;

  // Calculate the n/2
  const majority = Math.floor(arraySize / 2);

  //  create a hashmap to store frequency of elements
  const frequency = {};

  // Iterate through the given array
  for (let num of nums) {
    if (num in frequency) {
      frequency[num] += 1;
    }
    // add every element in the hashmap with key as element and 1 as value
    else {
      frequency[num] = 1;
    }
    // Lookup in the hashmap if any key has value which  more than or equal to  n/2
    if (frequency[num] > majority) {
      // if any value of any key matches return the element
      return num;
    }
  }
  // fallback
  return null;

}

console.log(majorityElement());


