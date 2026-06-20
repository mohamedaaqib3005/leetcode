// leetcode 49

// Edgecase
// []--> ['']
// ["bat"]-->[["bat"]]
// ["eat","tea","tan","ate","nat","bat","can"]-->[["can"],["bat"],["nat","tan"],["ate","eat","tea"]]


// Brute Force
// Iterate through the array
// split each word with char
// Compare each char of each word to all the words in the array
// if the char match then the words are anagram and u can group them




// Brute force
const strs = ["eat", "tea", "tan", "ate", "nat", "bat", "can"];
const groupAnagram = (strs) => {
  // Iterate through the strs array
  for (let str of strs) {
    // Split each word into an array of strings
    let word = str.split("");
    console.log("word", word)
    // Iterate through the strs array again nested loop within the same loop for every word check all the other words in the array
    for (let otherStr of strs) {
      let otherWord = otherStr.split("")
      // skip if the current words and word in the inner loop is same
      if (str === otherStr) continue;
      console.log("otherWord", otherWord)
      // Iterate through each char for each word
      let isAnagram = true;
      for (let char of word) {
        // check if char is present in other words
        // If other words doesnt have the char return false
        if (word.length === otherStr.length && !otherStr.includes(char)) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        console.log(`Found Anagram Pair:${str}&${otherStr}`)
      }
    }
  }

  // else return true

  return true
}

groupAnagram(strs)






