const input = [3, 9, 20, null, null, 15, 7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
const maxDepth = (root) => {
  if (!hasValue(root)) return 0;

  let left = maxDepth(leftChild(root));
  let right = maxDepth(rightChild(root));

  return Math.max(left, right) + 1;
}
// const input = [3, 9, 20, null, null, 15, 7]

const leftChild = (root) => 2 * root + 1;
const rightChild = (root) => 2 * root + 2;

const hasValue = (root) => input[root] != null;

console.log(maxDepth(0));//1
// ! root converts to opposite boolean value
// !! converts it back into original boolean value