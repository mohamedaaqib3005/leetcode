// Fibonacci Problem

// // this is the prime example of dynamic programming
// // Dynamic Programming is Tree Recursion plus Memoization
// Tree recursion means at each level there is a same algorithm which is implemented
// Memoization - repitation of nodes which can be memoized
// DP - we need to go through all elements just once and calculate it and store rather than calculating everytime for each node again
function fibonacci(n) {
  // edgecases
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }


}
console.time();

console.log(fibonacci(5));
console.timeEnd()
// Time Complexity : O(2^n)

// can we do better



