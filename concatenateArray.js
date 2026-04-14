// concatenate
// You are given an integer array nums of length n. Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

const nums = [1, 4, 1, 2];
const concatanateArray = (nums) => {
  //   // let ans = [...nums, ...nums]//[
  //   1, 4, 1, 2,
  //   1, 4, 1, 2
  // ]
  let ans = nums.concat(nums);//[
  let cont = nums.concat(...nums)//   1, 4, 1, 2,
  //   1, 4, 1, 2
  // ]
  let conta = nums.concat(1, 2, 3)
  let shallow = nums.concat()
  console.log("shallow", shallow)
  console.log("conta", conta);
  console.log("cont", cont);
  //   1, 4, 1, 2,
  //   1, 4, 1, 2
  // ]
  return ans;
}

console.log(concatanateArray(nums))

let arr = [1, { "value": 88 }]
let shall = arr.concat()
console.log(shall)
console.log(shall[1])//{ value: 88 }accessing array using index
console.log(shall[1].value)//88
console.log(shall[1]["value"])//88
shall[1].value = 97;
console.log(shall[1]["value"])//97
console.log("refernce", arr[1].value)//97
arr[1].value = 65;
console.log(arr[1].value)//65


//Learnings:
// --> concat() method is used to merge array or values
// --> it can be used to return shallow copy;
// // Bracket notation const key = 'age';
// const user = {};

// user[key] = 25; // Uses the value of `key` as the property name

// console.log(user); // { age: 25 }
// concat creates shallow copy copying the refernce when u chnge anything in shallow copied it reflects on original also