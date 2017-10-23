module.exports =  (num) => {
  const result = parseInt(`${Math.abs(num)}`.split('').reverse().join(''), 10);

  if (isNaN(result) || result > Math.pow(2, 31)) {
    return 0;
  }

  return num > 0 ? result : -result;
};