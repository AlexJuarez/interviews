/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {
  const str = s.replace(/\s/g, "");
  const stack = [];
  let result = 0;
  let number = 0;
  let sign = 1;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (/\d/.test(char)) {
      number = 10 * number + parseInt(char, 10);
    } else if (char === '+') {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (char === '-') {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (char === '(') {
      stack.push(result, sign);
      sign = 1;
      result = 0;
    } else if (char === ')') {
      result += sign * number;
      number = 0;
      result *= stack.pop();
      result += stack.pop();
    }
  }

  if (number !== 0) {
    result += sign * number;
  }

  return result;
};

console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
