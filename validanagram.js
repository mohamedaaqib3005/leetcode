// valid anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.


const s = "racecar";
const t = "carrace";


// const validAnagram = () => {
//   // const sorteds = s.sort((a, b) => a - b) % wrong
//   // const sArray = s.split()//[ 'racecar' ]
//   // const sArray = s.split(" ")//[ 'racecar' ]
//   console.log(s === t)//false u can compare strings since they are primitives but not arrays
//   const sArray = s.split("")
//   console.log(sArray)//[
//   //   'r', 'a', 'c',
//   //   'e', 'c', 'a',
//   //   'r'
//   // ]

//   const tArray = t.split("")
//   console.log(tArray)//[
//   //   'c', 'a', 'r',
//   //   'r', 'a', 'c',
//   //   'e'
//   // ]
//   const sortedArrays = sArray.sort()//[
//   //   'a', 'a', 'c',
//   //   'c', 'e', 'r',
//   //   'r'
//   // ]
//   console.log(sortedArrays)
//   const sortedArrayt = tArray.sort()
//   console.log(sortedArrayt);

//   if (sortedArrays === sortedArrayt) return true;//% wrong undefined

//   const sstring = JSON.stringify(sortedArrays)
//   console.log(sstring)//["a","a","c","c","e","r","r"]
//   const tstring = JSON.stringify(sortedArrayt);
//   console.log(tstring)//["a","a","c","c","e","r","r"]

//   const joinedsArray = sortedArrays.join()
//   console.log(joinedsArray)// a,a,c,c,e,r,r

//   const joinedtArray = sortedArrayt.join()
//   console.log(joinedtArray)// a,a,c,c,e,r,r


//   // console.log(sortedArrays.every(sortedArrayt))
//   if (joinedsArray === joinedtArray) return true;// both approach right

//   // if (sstring === tstring) return true;//correct
// }


// console.log(validAnagram())


const validAnagram = () => s.split("").sort().join() === t.split("").sort().join()

console.log(validAnagram())
// Learnings :
// in js strings cannot be sorted because there are immutable ;
// the only way to sort string is to turn it into array and then sort it
// We cannot compare arrays with === since arrays are objects underneath it compares the references(memory address of both)


