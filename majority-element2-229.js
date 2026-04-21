// // Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
const nums = [3, 2, 3];
// // const nums = [1]
// const nums = [1, 2];
// const majorityElement2 = (nums) => {
//   const result = [];
//   let hashmap = {};
//   let n = nums.length;
//   for (let num of nums) {
//     if (hashmap[num]) hashmap[num] += 1
//     else hashmap[num] = 1;

//     if (hashmap[num] > n / 3) result.push(num)

//   }
//   return result;
// }

// console.log(majorityElement2(nums))


// PSUEDOCODE:
// Iterate through  the array
// create a hashmap with counts
// create an array with
// check if the num has count more than n/3 then add them to result array
// Return the result array
const majorityElement2 = () => {
  const n = nums.length
  const result = [];
  const hashmap = {};
  for (let num of nums) {
    hashmap[num] = hashmap[num] ? hashmap[num] + 1 : 1;// ternary is an expression it must produce values either use = or return it directly
    hashmap[num] = (hashmap[num] ?? 0) + 1
    if (hashmap[num] > n / 3) result.push(num)
  }
  // resul?.length > 0 ? result : null
  return result.length > 0 ? result : null


}

console.log(majorityElement2())

// Learnings :
// cannot use += in the ternary operator because += means ressignment of existing varible i.e add something which is already there in the memory with one
// In case of ternary operator it is an expression waiting for value to be returned we cant use += in ternary without the variable in the memory.
// always start ternary with return when u are not using = or inside a func param
// use logical or and null coleasing when u want to fallback
// hashmap[num] ?? checks if hasmap[num] exist if exist return the hashmap value or just return 0