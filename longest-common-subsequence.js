const LCS = (str1, str2) => {
  const n = str1.length;
  const m = str2.length;
  const D = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        D[i][j] = D[i - 1][j - 1] + 1;
      } else {
        D[i][j] = Math.max(D[i-1][j], D[i][j-1]);
      }
    }
  }

  console.log(D);

  return D[n][m];
};

//console.log(LCS("aa", "bb"));
console.log(LCS("abcbdab", "bdcabc"));
