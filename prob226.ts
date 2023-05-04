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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  if (!root.right) {
    root.right = invertTree(root.left);
    root.left = null;
    return root;
  }
  if (!root.left) {
    root.left = invertTree(root.right);
    root.right = null;
    return root;
  }
  const tmp = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(tmp);
  return root;
}
