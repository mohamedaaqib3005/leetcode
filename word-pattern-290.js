//290.Word Pattern

//Edgecases
// pattern = "", s = ""; --> true;
// pattern = "abc", s = "cat,dog,elephant" -- > true;
// pattern = "", s = "ball bat stumps"-- > true;
// pattern = "a", s = "apple orange watermelon"-- > false;
// pattern = "abc", s = "apple apple orange"-- > false;


//BruteForce
// Check the no of chars is equal to no of words in the string of s
// If the no of chars is not equal return null;
// Iterate through pattern
// Iterate through s
// Check if each char of s maps to same  word  of the string
//  If they are not same then return false
// return true




//Optimised Solution
const pattern = "abba"; const s = "dog cat cat fish";
const wordPattern = (pattern, s) => {
  // Check if the length of the chars in pattern are equal to the no of words in string
  const patternLength = pattern.length;
  const sArray = s.split(" ");
  console.log(sArray)
  const sArrayLength = sArray.length;
  console.log("patternLength", patternLength);
  console.log("sArrayLength", sArrayLength);
  // If the length is not equal return false
  if (patternLength !== sArrayLength) return false;
  // create a hashmap
  const patternMap = {}
  // If the length is equal create a mapping for each char in pattern to each word in  s
  const wordMap = {};
  for (let [i, char] of pattern.entries()) {
    let word = sArray[i];
    // if (char in patternMap || word in wordMap) {
    //check if the pattern and word are same
    // // if not return false
    // // if (char !== wordMap[word] || word !== patternMap[char]) {
    //   return false;
    // }
    if (char in patternMap) {
      if (patternMap[char] !== word) {
        return false;
      }
    }

    if (word in wordMap) {
      if (wordMap[word] !== char) {
        return false;
      }
    }
    patternMap[char] = word;
    wordMap[word] = char
  }

  // if the  key value exists already compare it with the new pair
  // if its not same then return false
  //
  return true;
}

wordPattern(pattern, s)