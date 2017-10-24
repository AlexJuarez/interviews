const minPathSum = (grid) => {
  const pq = [{row: 0, col: 0, n: grid[0][0]}];

  while (pq.length) {
    const {row, col, n} = pq.shift();

    if (row === grid.length - 1 && col === grid[row].length - 1) {
      return n;
    }

    if (row < grid.length - 1) {
      const down = {row: row + 1, col: col, n: n + grid[row + 1][col]};
      const index = pq.findIndex(i => i.n > down.n);

      if (index === -1) {
        pq.push(down);
      } else {
        pq.splice(index, 0, down);
      }
    }

    if (col < grid[row].length - 1) {
      const right = {row: row, col: col + 1, n: n + grid[row][col + 1]};
      const index = pq.findIndex(i => i.n > right.n);

      if (index === -1) {
        pq.push(right);
      } else {
        pq.splice(index, 0, right);
      }
    }
  }

  return 0;
};

console.log(minPathSum([[1,2],[1,1]]));
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));