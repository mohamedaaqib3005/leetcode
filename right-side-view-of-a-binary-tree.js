
const dfs = (root) => {
  if (!root) return;

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    console.log(node.val); // visit

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
};
const rightSideView = (root) => {
  if (!root) return [];
  // create a stack to store root
  let stack = [[root, 0]];
  let res = [];
  // push element to stack

  // until the stack is empty
  while (stack.length) {
    // pop the element make it node
    const [node, depth] = stack.pop()
    // visit the node
    console.log(node);
    // push the children of the node
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  // if the stack is empty stop this process
}