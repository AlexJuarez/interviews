const helper = (results, n, k, temp = [], start = 0) => {
  if (temp.length === k) {
    results.push(temp.slice());
    return;
  }

  for (let i = start; i < n; i++) {
    temp.push(i+1);
    helper(results, n, k, temp, i + 1);
    temp.pop();
  }
};

const combine = (n, k) => {
  const results = [];
  if (n < k) {
    return results;
  }

  helper(results, n, k);

  return results;
};

console.log(combine(4, 2));
