// largest element striver


// Edgecases
// []-->[]
// [single element]-->[single element]
// [all elements are same ]-->[]




// Brute Force
const nums = [2, 7, 3, 1, 4, 5]
const largestNumber = () => {
  // Sort the array

  const sortedArray = nums.sort((a, b) => a - b)
  console.log("sortedArray", sortedArray)

  const lastIndex = nums.length - 1
  return nums[lastIndex]
}




console.log(largestNumber())
// Time Complexity : nlogn

// sort() sorts as strings,
//   sort((a, b) => a - b) sorts numerically

// can we do it better can we get that to O(n)
// Optimised Solution
const numbers = [4, 2, 3, 6, 7, 9, 10, 8]
const findlargestNumber = () => {
  // Make the first element as largest
  return Math.max(...numbers)

}

console.log(findlargestNumber())


// Time Complexity: O(n);

// Space Complexity : O(n) because it has to create space for addition n elements in the memory


// can we do better can we reduce the space complexity

// Optimised solution using Math.max()
const findthelargestNumber = () => {
  const largestNumber = numbers.reduce((max, curr) => Math.max(max, curr))
  return largestNumber;
}

console.log(findthelargestNumber())

// Time Complexity: O(n);

// Space Complexity : O(2) because it stores only max and curr apart from input array



// Optimised Solution with manual approach

const findthelargestNumberOfArray = () => {
  // Iterate through the array
  let max = numbers[0]
  for (let num of numbers) {
    if (num > max) {
      max = num
    }

  }
  return max
}

console.log(findthelargestNumberOfArray())

// Time Complexity: O(n);

// Space Complexity : O(1)

