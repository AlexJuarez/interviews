const romanToInt = (s) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const numbers = s.split("").reverse().map(c => romanNumerals[c]);

  let sum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i-1]) {
      sum -= numbers[i];
    } else {
      sum += numbers[i];
    }
  }

  return sum;
};

console.log(romanToInt("MCMLIV"), 1954);
console.log(romanToInt("MCMXC"), 1990);
console.log(romanToInt("MMXIV"), 2014);
