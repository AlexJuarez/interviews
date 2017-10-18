const charCount = (str) => {
  const letters = {};

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (letters[c] == null) {
      letters[c] = 0;
    }

    letters[c]++;
  }

  return letters;
};

const isEqual = (a, b) => Object.keys(a).length === Object.keys(b).length &&
    Object.keys(a).every((key) => a[key] === b[key]);

module.exports = isPermutation = (a, b) => isEqual(charCount(a), charCount(b));