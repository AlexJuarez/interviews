const solveSudoku = (board) => {
  const createSet = (n) => new Array(n).fill(0).map(() => new Set());

  const rows = createSet(board.length);
  const cols = createSet(board.length);
  const groups = createSet(board.length);
  let unsolved = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const num = board[row][col];
      const group = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const solutions = new Array(9).fill(0).map((n, i) => `${i + 1}`);
      if (num === '.') {
        unsolved.push({ row, col, group, solutions });
        continue;
      }

      rows[row].add(num);
      cols[col].add(num);
      groups[group].add(num);
    }
  }

  let visited = [];
  while (unsolved.length) {
    const curr = unsolved.shift();
    const { row, col, group } = curr;
    const solutions = curr.solutions.filter((n) =>
      !rows[row].has(n) && !cols[col].has(n) && !groups[group].has(n)
    );

    if (solutions.length <= 2) {
      const num = solutions[0];
      rows[row].add(num);
      cols[col].add(num);
      groups[group].add(num);
      board[row][col] = num;
    } else if (solutions.length < curr.solutions.length) {
      unsolved.push({ row, col, group, solutions });
    } else {
      visited.push({ row, col, group, solutions });
    }

    if (!unsolved.length) {
      console.log(board);
      unsolved = visited;
      visited = [];
    }
  }
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

const test2Board = [[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]];

solveSudoku(test2Board);

console.log(test2Board);
