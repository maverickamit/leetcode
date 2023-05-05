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

function maxDepth(root: TreeNode | null): number {
  function calculateDepth(
    currentNode: TreeNode | null,
    currentDepth: number
  ): number {
    if (!currentNode) return currentDepth;
    if (!currentNode.right) {
      return calculateDepth(currentNode.left, currentDepth + 1);
    }
    if (!currentNode.left) {
      return calculateDepth(currentNode.right, currentDepth + 1);
    }
    const leftPathDepth = calculateDepth(currentNode.left, currentDepth + 1);
    const rightPathDepth = calculateDepth(currentNode.right, currentDepth + 1);
    if (leftPathDepth > rightPathDepth) {
      return leftPathDepth;
    }
    return rightPathDepth;
  }
  return calculateDepth(root, 0);
}
