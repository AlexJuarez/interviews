const probability = (x, y, n) => {
  const results = [];
  helper(x, y, n, results);

  const validChoices = valid(results).length;

  return `${validChoices} / ${results.length}`;
};

const helper = (x, y, n, results) => {
  if (n === 0) {
    return;
  }

  const positions = getPositions(x, y);
  const validPositions = valid(positions);
  results.push(...positions);
  for (let i = 0; i < validPositions.length; i++) {
    const [x1, y1] = validPositions[i];
    helper(x1, y1, n - 1, results);
  }
};

const getPositions = (x, y) => {
  return [
    [3, 1], [3, -1], [-3, 1], [-3, -1],
    [1, 3], [-1, 3], [1, -3], [-1, -3]
  ]
    .map(n => [n[0] + x, n[1] + y]);
};

const valid = (positions) => positions.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);

console.log(probability(0, 0, 2));