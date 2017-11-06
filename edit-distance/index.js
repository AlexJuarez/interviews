const minDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;

  const D = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    D[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    D[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        D[i][j] = D[i - 1][j - 1];
      } else {
        D[i][j] = Math.min(
          D[i - 1][j - 1] + 1,
          D[i][j - 1] + 1,
          D[i - 1][j] + 1,
        );
      }
    }
  }

  console.log(D);

  return D[m][n];
};

console.log(minDistance("abc", "aaa"));
