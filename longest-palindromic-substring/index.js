const longestPalindrome = (s) => {
  if (!s.length) {
    return '';
  }

  let maxLength = 1;
  let currentLength = 0;
  let maxStart;
  for (let i = 0; i < s.length;) {
    if (s.length - i <= maxLength / 2) {
      break;
    }

    let start = i;
    let end = i;

    while (end < s.length - 1 && s[end] === s[end + 1]) {
      end++;
    }
    i = end + 1;
    while (end < s.length - 1 && start > 0 && s[start - 1] === s[end  + 1]) {
      start--;
      end++;
    }
    currentLength = end - start + 1;
    if (maxLength < currentLength) {
      maxLength = currentLength;
      maxStart = start;
    }
  }

  return s.substr(maxStart, maxLength);
};

console.log(longestPalindrome('cbbd'));
