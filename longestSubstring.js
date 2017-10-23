const lengthOfLongestSubstring = (s) => {
  let start = 0;
  let max = 0;
  const chars = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (chars[char] != null && start <= chars[char]) {
      start = chars[char] + 1;
    } else if (i - start + 1 > max) {
      max = i - start + 1;
    }

    chars[char] = i;
  }

  return max;
};

console.log(lengthOfLongestSubstring("abba"), 2);
console.log(lengthOfLongestSubstring("tmmzuxt"), 5);