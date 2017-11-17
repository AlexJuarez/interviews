/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

class Node {
  constructor(val, index) {
    this.val = val;
    this.index = index;
    this.left = this.right = null;
  }

  add(val, index) {
    const { left, right } = this;
    if (this.val > val) {
      if (left == null) {
        this.left = new Node(val, index);
      } else {
        this.left = this.left.add(val, index);
      }
    } else {
      if (right == null) {
        this.right = new Node(val, index);
      } else {
        this.right = this.right.add(val, index);
      }
    }

    const balance = this.height(this.right) - this.height(this.left);

    if (balance > 1) {
      const temp = right.left;
      right.left = this;
      this.right = temp;
      return right;
    } else if (balance < -1) {
      const temp = left.right;
      left.right = this;
      this.left = temp;
      return left;
    }

    return this;
  }

  height(node) {
    if (node == null) {
      return 0;
    }

    return 1 + Math.max(node.height(node.left), node.height(node.right));
  }
}

const containsNearbyAlmostDuplicate = function(nums, k, t) {
  let root = null;
  for (let i = 0; i < nums.length; i++) {
    if (root == null) {
      root = new Node(nums[i], i);
    } else {
      root = root.add(nums[i], i);
    }
  }

  console.log(root);
};

containsNearbyAlmostDuplicate([1, 3, 5, 2, 6, 7]);
