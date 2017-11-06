const threeSumClosest = (nums, target) => {
  nums.sort();

  const n = nums.length;
  const D = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

  D[0][1] = nums[0] + nums[1];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        D[i][j] = nums[i - 1][j - 1]
      }
    }
  }
};