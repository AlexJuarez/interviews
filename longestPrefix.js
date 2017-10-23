const longestCommonPrefix = (strs) => {
  const root = {};
  let longestCommonPrefix = "";

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let curr = root;
    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      if (curr[char] == null) {
        curr[char] = {};
      } else if (j > longestCommonPrefix.length - 1) {
        longestCommonPrefix = str.substring(0, j + 1);
      }
      curr = curr[char];
    }
  }

  return longestCommonPrefix;
};

console.log(longestCommonPrefix(["aac", "aa", "aba"]));