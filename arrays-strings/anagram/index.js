module.exports = isAnagram = (arr, str) => {
  const words = {};

  const toLetters = (word) => word
    .split("")
    .map(l => l.toLowerCase())
    .sort()
    .join("");

  arr.forEach((word) => {
    words[toLetters(word)] = true;
  });

  return words[toLetters(str)] != null;
};

console.log(isAnagram(["test1", "test2", "test3"], "3test"));
