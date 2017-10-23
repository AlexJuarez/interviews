const check = (row, col, board, visited) => {
  const symbol = board[row][col];
  const right = [[row, col + 1], [row, col + 2]];
  const down = [[row + 1, col], [row + 2, col]];
  const rDiag = [[row + 1, col + 1], [row + 2, col + 2]];
  const lDiag = [[row - 1, col - 1], [row - 2, col - 2]];

  const travel = (path) => !path.some(cord => {
    const r = cord[0];
    const c = cord[1];
    const key = `${r}:${c}`;
    if (visited[key]) {
      return true;
    }

    if (r > board.length - 1 || r < 0) {
      return true;
    }

    if (c > board[r].length - 1 || c < 0) {
      return true;
    }

    if (board[r][c] !== symbol) {
      return true;
    }

    return false;
  });

  return travel(right) || travel(down) || travel(rDiag) || travel(lDiag);
};

const winner = (board) => {
  const visited = {};

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const key = `${row}:${col}`;
      if (visited[key]) {
        continue;
      }

      if (board[row][col] != null && check(row, col, board, visited)) {
        return board[row][col];
      }
    }
  }

  return 'there was not a winner';
};

const testBoard = [
  ['x', null, null],
  [null, 'x', null],
  [null, null, 'x']
];

console.log(winner(testBoard));