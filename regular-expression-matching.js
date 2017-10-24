const isMatch = (str, pattern) => {
  const n = str.length;
  const m = pattern.length;

  const D = new Array(n + 1).fill(new Array(m + 1));
  D[0][0] = true;

};