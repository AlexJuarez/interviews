const groupAnagrams = function(strs) {
  const m = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sorted = str.split("").sort().join("");
    if (m[sorted] == null) {
      m[sorted] = [];
    }

    m[sorted].push(str);
  }

  return Object.values(m).map(arr => arr.sort());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));