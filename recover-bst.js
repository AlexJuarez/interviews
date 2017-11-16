var recoverTree = function(root) {
  recoverTreeHelper(root);
};

const swap = (a, b) => {
  let temp = a.left;
  a.left = b.left;
  b.left = temp;
  temp = a.right;
  a.right = b.right;
  b.right = temp;
};

const recoverTreeHelper = (node) => {
  if (node == null || (node.left == null && node.right == null)) {
    return;
  }

  const { left, right } = node;

  if (left != null && left.val > node.val) {
    swap(left, node);
  }

  if (right != null && right.val < node.val) {
    swap(right, node);
  }

  recoverTreeHelper(left);
  recoverTreeHelper(right);
};
