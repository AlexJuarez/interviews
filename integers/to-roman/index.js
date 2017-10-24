/**
 * @param {number} num
 * @return {string}
 */

const numToNumeral = (ten, five, one) => (num = 0) => {
  if (num === 9) {
    return `${one}${ten}`;
  }
  if (num >= 5) {
    return `${five}${new Array(num - 5).fill(one).join('')}`
  }
  if (num === 4) {
    return `${one}${five}`;
  }

  return `${new Array(num).fill(one).join('')}`;
};

const singles = numToNumeral('X', 'V', 'I');
const tens = numToNumeral('C', 'L', 'X');
const hundreds = numToNumeral('M', 'D', 'C');
const thousands = (num) => `${new Array(num).fill('M').join('')}`;

const convert = (num, offset) => {
  switch (offset) {
    case 3:
      return thousands(num);
    case 2:
      return hundreds(num);
    case 1:
      return tens(num);
    default:
      return singles(num);
  }
};

const intToRoman = (num) => {
  const numbers = `${num}`.split('').map(n => parseInt(n, 10)).reverse();

  return numbers.map(convert).reverse().join('');
};

console.log(intToRoman(3999));
