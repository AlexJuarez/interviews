/**
 * @param {string[]} strs
 * @return {string}
 */
const getCommonPrefix = (prefix, str) => {
  while (str.substring(0, prefix.length) !== prefix && prefix.length) {
    prefix = prefix.substring(0, prefix.length - 1);
  }

  return prefix;
};

const longestCommonPrefix = (strs) => {
  if (!strs.length) {
    return "";
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    prefix = getCommonPrefix(prefix, str);
  }

  return prefix;
};

module.exports = longestCommonPrefix;
