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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let arr: number[] = [0];
  postTraversal(root, arr);
  return arr[0];
}

function postTraversal(root: TreeNode | null, arr: number[]): void {
  if (root == null) return;
  postTraversal(root.left, arr);
  postTraversal(root.right, arr);
  diameterOfNode(root, arr);
}

function diameterOfNode(node: TreeNode | null, arr: number[]): void {
  if (node === null) return;
  let dia: number = 0;
  //dia = height of left node + height of right node + 2 edges
  dia =
    (node.left ? node.left.val + 1 : 0) + (node.right ? node.right.val + 1 : 0);
  //replacing the value of node to the height of that node for easy calculation in next iteration
  node.val = calculateHeight(node);

  //storing the max value of diameter yet found
  if (dia > arr[0]) arr[0] = dia;
}

function calculateHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  if (!root.left && !root.right) return 0;
  return 1 + Math.max(root.left?.val ?? 0, root.right?.val ?? 0);
}

// Driver code with TypeScript
function main(): void {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(6);

  // Function call
  console.log("Diameter of binary tree is:");
  console.log(diameterOfBinaryTree(root));
}

main();
