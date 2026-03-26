
//           5
//     -1 /    \-2
//       4      3
//    -1/ \-2  / \
//     3  2   2  1
//    / \
//   2   1
//
//

// This problem is similar to fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13

// to find the fibonacci last number we just need last 2 numbers which is n - 1 n - 2  and which will take of the rest using recursion
// we can use DP since it is tree  recursion and u cache the common parts
// DP = tree recursion plus memoization
function climbingStairs(n) {
  const memo = [0, 1, 2];// u can take either 1 or 2 steps

  function helper(n) {
    if (memo[n] === undefined) {
      memo[n] = helper(n - 1) + helper(n - 2)
    }
    return memo[n]
  }
  return helper(n)

}




