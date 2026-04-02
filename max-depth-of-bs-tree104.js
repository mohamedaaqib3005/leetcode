// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
const maxDepth = (root) => {
  if (!root) return 0;
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return Math.max(left, right) + 1
}

