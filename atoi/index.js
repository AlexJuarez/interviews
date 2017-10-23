module.exports = (str) => {
  let sign = 1;
  let res = 0;
  let i = 0;

  while (str[i] === ' ') {
    i++;
  }

  if (str[i] === '-') {
    sign = -1;
    i++;
  } else if (str[i] === '+') {
    i++;
  }

  const zero = '0'.charCodeAt(0);
  for (;i < str.length; i++) {
    const digit = str.charCodeAt(i) - zero;

    if (digit > 9 || digit < 0) {
      break;
    }

    res = res*10 + digit;
  }

  res = sign * res;
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  if (res > MAX) {
    return MAX;
  }

  if (res < MIN) {
    return MIN;
  }

  return res;
};