const maxSquare = (matrix) => {
  const n = matrix.length;
  const D = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

  let max = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === 1) {
        D[i][j] = Math.min(D[i - 1][j - 1], D[i][j - 1], D[i - 1][j]) + 1;

        if (D[i][j] > max) {
          max = D[i][j];
        }
      }
    }
  }

  return max * max;
};

const maxRectangle = (matrix) => {
  const n = matrix.length;
  const D = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

  let max = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j - 1] === 1) {
        D[i][j] = D[i][j - 1] + D[i - 1][j];

        if (D[i][j] > max) {
          max = D[i][j];
        }
      }
    }
  }

  return max;
};

const matrix = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
];

console.log(maxRectangle(matrix));
