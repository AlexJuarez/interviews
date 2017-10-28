const isValidSudoku = (board) => {
  const setArray = (n) => new Array(n).fill(0).map(() => new Set());

  const rows = setArray(board.length);
  const cols = setArray(board.length);
  const groups = setArray(board.length);

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const num = board[row][col];
      const group = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (isNaN(num) || num == null ) {
        continue;
      }

      if (rows[row].has(num)) {
        return false;
      }

      if (cols[col].has(num)) {
        return false;
      }

      if (groups[group].has(num)) {
        return false;
      }

      rows[row].add(num);
      cols[col].add(num);
      groups[group].add(num);
    }
  }

  return true;
};

const testBoard = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9]
];

console.log(isValidSudoku(testBoard));