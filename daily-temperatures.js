// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

const dailyTemperatures = (temperatures) => {
  let result = [0, 0, 0, 0, 0, 0, 0, 0];
  console.log(result);
  //loop through the array from left to right
  const n = temperatures.length
  console.log(n)
  for (let i = n - 1; i >= 0; i--) {
    let j = i + 1
    //  if the temperature on the right side is less check if there are some temp greater than the current
    while (j < n && temperatures[j] <= temperatures[i]) {

      result[i] += result[j];

    }
    result[i] = j - 1;

  }
  console.log(result);
  return result;
}


console.log(dailyTemperatures(temperatures))

// Learnings:
// j should be let or else it can be updated
// start i = n-1 or else it will comapre with temp[n]