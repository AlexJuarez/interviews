const longestPalindrome = (s) => {
  const str = `#${s.split('').join('#')}#`;
  const counts = new Array(str.length).fill(0);

  for (let i = 1; i < str.length - 1; i++) {
    let start = i - 1;
    let end = i + 1;
    while (start >= 0 && end < str.length && str[start--] === str[end++]) {
      counts[i]++;
    }
  }

  let longest = '';
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    const palindrome = str.substring(i - count, i + count);
    if (palindrome.length > longest.length) {
      longest = palindrome;
    }
  }

  return longest.replace(/\#/g, '');
};

console.log(longestPalindrome('cbbd'));
