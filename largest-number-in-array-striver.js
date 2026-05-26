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


// sort() sorts as strings,
//   sort((a, b) => a - b) sorts numerically