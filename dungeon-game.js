/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function(dungeon) {
  const n = dungeon.length;
  const m = dungeon[0].length;
  const D = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      D[i][j] = Math.min(D[i - 1][j], D[i][j - 1]) - dungeon[i][j];
    }
  }

  return Math.max(D[n - 1][m - 1], 1);
};


console.log(calculateMinimumHP([[-3, 5]]));
