// find all the elements who have no greater numbers to the right

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]


// //EdgeCases:
// [0] -> [0]
// [2, 2, 2, 2] -> [2]
// [1, 2, 3, 4, 5, 6] -> [6]
// [6, 5, 3, 2, 1] -> [6, 5, 3, 2, 1]

//Tips and Tricks
//for problems like this try to move reverse

//Brute Force:
//loop through the array
// again loop for each element compare the element with everything on the right
// check if the elements of the right are not greater than the element then push it in the an array
// return the array


const nums = [16, 17, 4, 3, 5, 2];
function arrayLeader(nums) {
  let leaders = [];
  leaders.push(nums[nums.length - 1]); // Last element is always a leader
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;

    while (j < nums.length && nums[j] < nums[i]) {
      j++;
    }
    if (j === nums.length) {// If j reached the end, all elements to the right were smaller
      leaders.push(nums[i]);
    }
  }
  return leaders;
}



console.log(arrayLeader(nums))


// Learnings:
// let [leaders] = [maxRight]; // This creates a variable, not an array builder
