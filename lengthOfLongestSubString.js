const lengthOfLongestSubstring = (s) => {
  const chars = new Array(26).fill(0);
  const offset = 'a'.charCodeAt(0);

  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i) - offset;
    if (chars[char] != null && start <= chars[char]) {
      start = chars[char] + 1;
    } else if ((i - start + 1) > max) {
      max = i - start + 1;
    }
    chars[char] = i;
  }

  return max;
};