const lengthOfLongestSubstring = function(s) {
  const letters = [];
  let result = '';
  let start = 0;

  const offset = 'a'.charCodeAt(0);
  const getCode = (i) => s.charCodeAt(i) - offset;

  for (let i = 0; i < s.length; i++) {
    const code = getCode(i);

    if (letters[code] != null && letters[code] + 1 > start) {
      start = letters[code] + 1;
    }

    if (i - start >= result.length) {
      result = s.substring(start, i + 1);
    }

    letters[code] = i;
  }

  return result;
};

console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
