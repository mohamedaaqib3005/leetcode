// longest common prefix

const strs = ["bat", "bag", "bank", "band"]

// Edgecases
// []---> ''
// it wont have two longest common prefix


// Brute force
// Iterate through the array take one letter and iterate within it to check if other words have the same letter
// like wise keep on increasing until it matches

// Complexity : n^2 we can do better

const longestCommonPrefix = () => {
  // Sort the array based on alphabatical order
  const sortedString = strs.sort() // dont use sort(a,b)

  // create a variable for prefix where u ll be adding char
  let prefix = "";
  //!important  compare only first and last element of the array containing string because once it is sorted the common prefix is what that is similar to first and last element
  const first = sortedString[0];
  // split the char of first element into an array
  const firstArray = first.split("")
  const lastIndex = sortedString.length - 1;

  const last = sortedString[lastIndex]
  // split the char of last element into an array
  const lastArray = last.split("")
  // loop through the minlength of first and last element
  for (let i = 0; i < Math.min(firstArray.length, lastArray.length); i++) {

    // check if each character of first array is matching char of lastArray
    if (firstArray[i] === lastArray[i]) {
      // keep on concatenating char for each iteration
      prefix += lastArray[i];
      // if it doesnt match break the loop
    } else {
      console.log("prefix", prefix)
      break;
    }
  }
  // return the prefix
  return prefix;
}
longestCommonPrefix()

// Complexity : nlogn


// sort((a,b)=>a-b) this is wrong cannot be used to sort array of string it outputs the same input as output
// .sort()  is enough