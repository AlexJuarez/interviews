const uniquePaths = (m, n) => {
  const D = new Array(n).fill(new Array(m).fill(1));

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      D[i][j] = D[i - 1][j] + D[i][j - 1];
    }
  }

  return D[n - 1][m - 1];
};

const uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  const D = new Array(n + 1).fill(new Array(m + 1).fill(0));

  D[0][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (!obstacleGrid[i - 1][j - 1]) {
        D[i][j] = D[i - 1][j] + D[i][j - 1];
      } else {
        D[i][j] = 0;
      }
    }
  }

  return D[n][m];
};

const obstacleGrid1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

const obstacleGrid = [[1]];

console.log(uniquePathsWithObstacles(obstacleGrid));
