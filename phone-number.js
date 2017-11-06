const translate = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

const combinations = (number, dict) => {
  const results = [];
  const parsedNumber = number.split('').map(s => parseInt(s, 10));
  helper(parsedNumber, results, dict);
  return results;
};

const helper = (number, results, dict, result = '', final = '') => {
  if (!number.length) {
    if (!result.length) {
      results.push(final);
    }
    return;
  }

  const letters = translate[number[0]];
  const rest = number.slice(1);

  for (let i = 0; i < letters.length; i++) {
    let next = result + letters[i];
    if (dict.has(next)) {
      final += next;
      next = '';
    }

    helper(rest, results, dict, next, final);
  }
};

console.log(combinations('5867626', new Set(['jump', 'man'])));