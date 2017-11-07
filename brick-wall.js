const leastBricks = (wall) => {
  const lines = {};
  let min = wall.length;
  for (let i = 0; i < wall.length; i++) {
    const bricks = wall[i];
    let width = 0;
    for (let j = 0; j < bricks.length - 1; j++) {
      width += bricks[j];
      if (lines[width - 1] == null) {
        lines[width - 1] = wall.length;
      }

      lines[width - 1]--;

      if (lines[width - 1] < min) {
        min = lines[width - 1];
      }
    }
  }

  return min;
};

const wall = [[1,2,2,1],
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]];

console.log(leastBricks(wall));
