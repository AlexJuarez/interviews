const uniqueNumbers = (n) => {
  const results = [0];
  helper(n, results);
  return results;
};

const helper = (n, results, number = 0, digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
  if (n === 0) {
    results.push(number);
    return;
  }

  for (let i = 0; i < digits.length; i++) {
    const dgs = digits.slice(0);
    dgs.splice(i, 1);
    const num = Math.pow(10, n - 1) * digits[i];

    helper(n - 1, results, number + num, dgs);
  }
};

console.log(uniqueNumbers(2).length);
