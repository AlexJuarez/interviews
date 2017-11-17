/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const str = s.replace(/\s/g, '');

  let number = 0;
  let stack = [];
  let sign = '+';
  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str.charAt(i))) {
      number = number*10 + parseInt(str.charAt(i), 10);
    }

    if (!/\d/.test(str.charAt(i)) || i === str.length - 1) {
      if (sign === '+') {
        stack.push(number);
      } else if (sign === '-') {
        stack.push(-number);
      } else if (sign === '*') {
        stack.push(stack.pop() * number);
      } else if (sign === '/') {
        stack.push(Math.floor(stack.pop() / number));
      }

      sign = str.charAt(i);
      number = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};

console.log(calculate('14-3/2'));