/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum, target = 0) => {
  if (root == null) {
    return false;
  }

  const result = target + root.val;

  if (result === sum && root.left == null && root.right == null) {
    return true;
  }

  return hasPathSum(root.left, sum, result) || hasPathSum(root.right, sum, result);
};

module.exports = hasPathSum;
