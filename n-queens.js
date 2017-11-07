const pad = (str, n) => new Array(n).fill(str).join('');

class Queen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Board {
  constructor(size) {
    this.cols = new Array(size).fill(1);
    this.rows = new Array(size).fill(1);
    this.leftDiag = new Array(2 * size).fill(1);
    this.rightDiag = new Array(2 * size).fill(1);

    this.size = size;
    this.queens = [];
  }

  isFree(x, y) {
    const n = this.size;
    return this.cols[x] && this.rows[y] && this.leftDiag[n + x - y] && this.rightDiag[x + y];
  }

  add(queen) {
    const {x , y} = queen;
    const n = this.size;
    this.cols[x] = 0;
    this.rows[y] = 0;
    this.leftDiag[n + x - y] = 0;
    this.rightDiag[x + y] = 0;

    this.queens.push(queen);
  }

  remove(queen) {
    const {x, y} = queen;
    const n = this.size;

    this.cols[x] = 1;
    this.rows[y] = 1;
    this.leftDiag[n + x - y] = 1;
    this.rightDiag[x + y] = 1;

    const index = this.queens.indexOf(queen);

    this.queens.splice(index, 1);
  }

  solved() {
    return this.queens.length === this.size;
  }

  print() {
    const n = this.size;
    const output = new Array(n).fill(pad('.', n));

    for (let i = 0; i < this.queens.length; i++) {
      const {x, y} = this.queens[i];

      output[y] = output[y].substring(0, x) + 'Q' + output[y].substring(x + 1);
    }

    return output;
  }
}

const solveNQueens = (n) => {
  const solutions = [];
  const board = new Board(n);
  solveHelper(board, solutions, n);
  return solutions;
};

const solveHelper = (board, solutions, n, y = 0) => {
  if (board.solved()) {
    solutions.push(board.print());
    return;
  }

  if (y >= n) {
    return;
  }

  for (let x = 0; x < n; x++) {
    if (board.isFree(x, y)) {
      const queen = new Queen(x, y);
      board.add(queen);
      solveHelper(board, solutions, n, y + 1);
      board.remove(queen);
    }
  }
};

const totalNQueens = (n) => {
  const cols = new Array(n).fill(false);
  const d1 = new Array(2 * n).fill(false);
  const d2 = new Array(2 * n).fill(false);
  let count = 0;

  const helper = (row) => {
    if (row === n) {
      count++;
    }

    for (let col = 0; col < n; col++) {
      const id1 = col - row + n;
      const id2 = col + row;

      if (cols[col] || d1[id1] || d2[id2]) {
        continue;
      }

      cols[col] = d1[id1] = d2[id2] = true;
      helper(row + 1);
      cols[col] = d1[id1] = d2[id2] = false;
    }
  };

  helper(0);

  return count;
};

console.log(totalNQueens(4));
