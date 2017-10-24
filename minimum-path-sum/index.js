const minPathSum = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        grid[i][j] = grid[i][j];
        continue;
      }

      if (i === 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
        continue;
      }

      if (j === 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
        continue;
      }

      grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
    }
  }

  return grid[m - 1][n - 1];
};

module.exports = minPathSum;
