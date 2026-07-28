// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.


// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d


// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// Edgecases
// "" cant be an empty string because its given in the
// even if one string is empty it should not affect the algorithm



// Brute Force
// Iterate through the string1
// Take one char from string1 and add it to result
// Iterate through the string2
// Take one char from string2 and concatenate to result
// Return the result string

const str1 = "abcd"
const str2 = "pq"
const mergeStringAlternatively = (str1, str2) => {
  // create an an empty result string ;
  let result = "";
  // u have to iterate until the max length not just the common length
  const maxLength = Math.max(str1.length, str2.length);

  // Note:// we loop parallely with two loops it completes first loop and then moves to second loop
  // to implement this we need parallel traversal

  // Iterate through the strings until maxlength
  for (let i = 0; i < maxLength; i++) {
    // Check if the i exist in the string or the length is over
    if (i < str1.length) {
      result += str1[i];// Concatenate  the first value of str1 to  result array

    }

    // Concatenate  the first value of str2 to  result array
    if (i < str2.length) {
      result += str2[i];
    }
  }
  return result;
}

console.log(mergeStringAlternatively(str1, str2))

// Time Complexity : O(n);
// Space Complexity : O(n) if we include result string

// Learnings
// Loops go from 0 till end and then go to next loop
// This is an example of parallel traversal: both strings are processed in the same loop.
// You cannot do parallel traversal using 2 loops
// Math.max(word1.length, word2.length) determines how many iterations are needed.
// if (i < word1.length) ensures we only access valid characters in word1.
// if (i < word2.length) ensures we only access valid characters in word2.
// When one string ends, the remaining iterations naturally append the leftover characters from the longer string.
// Strings are iterable but immutable
// you can access an index,check length of string but cannot mutate strings

// # Comparison

// | Feature    | String | Array           | Object | Number        |
// | ---------- | ------ | --------------- | ------ | ------------- |
// | Indexed    | ✅      | ✅               | ❌      | ❌             |
// | Keys       | ❌      | Numeric indices | ✅      | ❌             |
// | Mutable    | ❌      | ✅               | ✅      | ❌ (primitive) |
// | Iterable   | ✅      | ✅               | ❌      | ❌             |
// | Has length | ✅      | ✅               | ❌      | ❌             |

// ---


// # One thing that confuses beginners

// This works

// ```javascript
// const str = "hello";

// console.log(str.toUpperCase());
// ```

// You might think

// > "Wait... if strings are primitives, how can they have methods?"

// Here's the trick.

// JavaScript temporarily wraps the primitive string in a **String object** behind the scenes, calls the method, then discards the wrapper.

// Conceptually:

// ```javascript
// // JavaScript behaves as if it did something like this:
// new String("hello").toUpperCase();
// ```

// This temporary wrapper is called **autoboxing**.

// ---

// # DSA Perspective

// When solving coding problems:

// | If you have... | Think...                           |
// | -------------- | ---------------------------------- |
// | String         | Sequence of characters (read-only) |
// | Array          | Sequence of values (can modify)    |
// | Object         | Fast key → value lookup (HashMap)  |
// | Set            | Fast membership checking (`has`)   |
// | Number         | Arithmetic and calculations        |

// ---


// * A **string is not an array**, but it behaves similarly because it is **iterable** and **indexable**.
// * Strings are **immutable**: you cannot change individual characters.
// * Arrays are **mutable**: you can add, remove, or modify elements.
// * Objects store **key-value pairs**, not indexed elements.
// * Numbers are primitive values with no indices or keys.
// * Use `for...of` to iterate over strings and arrays because both are iterable.
// * Use `for...in` (or `Object.keys()`, `Object.values()`, `Object.entries()`) when you want to iterate over an object's properties.





