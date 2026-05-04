// Next Greater Element

// Input: [6, 0, 8, 1, 3]
// Output: [8, 8, -1, 3, -1]


// Edgecase:
// []-- > []
// [8]-- > [-1]



// // Brute Force:
const input: number[] = [5, 3, 7, 0, 1, 9]// --->[7,7,9,1,9,-1]
// const nga = (input: number[]): number[] => {
//   //  iterate through the array and iterate again from index plus 1 for each element
//   const result = input.map((num, i) => {
//     for (let j = i + 1; j < input.length; j++) {
//       if (num < input[j]) {
//         return input[j]
//       }
//     }
//     return -1
//   })
//   return result;
// }


// console.log(nga(input))





//Optimal solution:
const nextGreaterElement = (input: number[]): number[] => {
  // Traverse from right to left from last index to first index
  let n = input.length;
  for (let i = n - 1; i >= 0; i--) {
    console.log(i)
  }

  let stack = []
  // return []
  // return [];
}


nextGreaterElement(input)

// Traverse from right → left
// Maintain a stack of candidates
// Pop all elements ≤ current
// If stack empty → -1
// Else → top of stack
// Push current element

// 👉 This is perfect logic


