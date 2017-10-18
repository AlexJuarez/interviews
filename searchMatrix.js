/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix.length) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let min = 0;
  let max = m * n - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const row = Math.floor(mid / n);
    const col = mid - row*n;

    if (matrix[row][col] < target) {
      min = mid + 1;
    } else if (matrix[row][col] > target) {
      max = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

searchMatrix(
  [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],
  3
);

searchMatrix(
  [[1,3]],
  1
);

searchMatrix(
  [[1,3,5,7],[10,11,16,20],[23,30,34,50]],
  16
);