class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  postTraversal(root); //Calculate height of each node and store it as it's value
  return preTraversal(root);
}

function preTraversal(node: TreeNode | null): boolean {
  if (node == null) return true;
  if (Math.abs((node.right?.val ?? 0) - (node.left?.val ?? 0)) > 1)
    return false;

  return preTraversal(node.left) && preTraversal(node.right);
}

function postTraversal(node: TreeNode | null): void {
  if (node == null) return;
  postTraversal(node.left);
  postTraversal(node.right);
  node.val = calculateHeight(node);
}

function calculateHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  if (!root.left && !root.right) return 1;
  return 1 + Math.max(root.left?.val ?? 0, root.right?.val ?? 0);
}
// Driver code with TypeScript
function main(): void {
  // Balanced binary tree scenario
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

  // Function call
  console.log("Is the binary tree height balanced:");
  console.log(isBalanced(root)); // Expected output: true
}

main();
