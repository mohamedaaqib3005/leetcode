//485. Max Consecutive ones

// Edgecase
// []-->[]
//[1]-->[1]
//[1,1,0,0,1,1]-->2


//Brute Force
//Iterate the input array
// Check if the current number is 1
// Iterate through the input array
//Check if the next number is one
// continue till there is another number


const nums = [1, 1, 0, 1, 1, 1]

const maxConsecutiveOnes = (nums) => {
  // Create new variables count and maxCount
  let count = 0;
  let maxCount = 0;
  // Iterate through the array
  for (let num of nums) {
    // Check if current num is 1
    if (num === 1) {
      // if the num is 1 increase the count
      count++;
      //change the value of maxCount to the max of count and maxCount
      maxCount = Math.max(count, maxCount);
    }
    else {
      // if the next number is not 1 change the value of count to 0;
      count = 0;
    }
  }
  // return maxCount
  return maxCount;
}