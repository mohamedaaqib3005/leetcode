

const nums = [2, 3, 1, 2, 4, 3]
const target = 7
const minimumSubArray = (nums, target) => {
  let left = 0;
  let currentSum = 0;
  let minWindowLength = Infinity;


  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]
    while (currentSum >= target) {
      let windowLength = right - left + 1;
      minWindowLength = Math.min(minWindowLength, windowLength)
      currentSum -= nums[left];
      left++;
    }

  }
  // if (minWindowLength === Infinity) {
  //   return 0;
  // }
  // else return minWindowLength;
  return minWindowLength === Infinity ? 0 : minWindowLength;

}

console.log(minimumSubArray(nums, target))