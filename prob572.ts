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

function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  //do pre-order traversal and compare both tree
  if (root === null && subRoot === null) {
    return true;
  }
  if (root?.val !== subRoot?.val) {
    return false;
  }

  return (
    isSameTree(root?.left, subRoot?.left) &&
    isSameTree(root?.right, subRoot?.right)
  );
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  //travel root in pre-order traversal and check if it's the same tree with subtree from that node
  if (root === null) return isSameTree(root, subRoot);
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

// Driver code
function main() {
  // Helper function to create a tree from an array representation
  function createTree(
    arr: (number | null)[],
    index: number = 0
  ): TreeNode | null {
    if (index >= arr.length || arr[index] === null) {
      return null;
    }

    const node = new TreeNode(arr[index] as number);
    node.left = createTree(arr, 2 * index + 1);
    node.right = createTree(arr, 2 * index + 2);

    return node;
  }

  const root = [
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    2,
  ];
  const subRoot = [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2];

  const rootTree = createTree(root);
  const subRootTree = createTree(subRoot);

  const result = isSubtree(rootTree, subRootTree);
  console.log(`Is subRoot a subtree of root? ${result}`);
}

// Run the driver code
main();
