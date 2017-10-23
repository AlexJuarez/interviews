class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const sumTree = (root) => {
  if (root == null) {
    return null;
  }

  const node = new TreeNode(root.val);
  node.left = sumTree(root.left);
  node.right = sumTree(root.right);

  if (node.right != null) {
    node.val += node.right.val;
  }

  if (node.left != null) {
    node.val += node.left.val;
  }

  return node;
};

const treeSums = (root) => {
  const queue = [root];
  const sums = [];
  while (queue.length) {
    const node = queue.shift();
    sums.push(node.val);

    if (node.left != null) {
      queue.push(node.left);
    }

    if (node.right != null) {
      queue.push(node.right);
    }
  }

  return sums;
};

const tree = new TreeNode(5);
tree.left = new TreeNode(2);
tree.right = new TreeNode(-5);

console.log(treeSums(sumTree(tree)));