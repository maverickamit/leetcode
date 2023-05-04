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
  let invertedNode: TreeNode | null = root;
  if (root?.left && root?.right) {
    invertedNode = new TreeNode(
      root.val,
      invertTree(root.right),
      invertTree(root.left)
    );
  } else if (root?.left) {
    invertedNode = new TreeNode(root.val, null, invertTree(root.left));
  } else if (root?.right) {
    invertedNode = new TreeNode(root?.val, invertTree(root.right), null);
  }
  return invertedNode;
}
