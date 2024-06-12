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

function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  function traverse(node: TreeNode | null) {
    if (node === null) return;
    traverse(node.left);
    ans.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return ans;
}
// let root = [1, null, 2, 3];

// Create the tree nodes
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node3, null);
const root = new TreeNode(1, null, node2);

console.log(inorderTraversal(root));
