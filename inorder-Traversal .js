var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    // Go left till the end
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    // Process node
    curr = stack.pop();
    result.push(curr.val);

    // Move to right subtree
    curr = curr.right;
  }

  return result;
};