module.exports = isUnique = (str) => {
  const letters = {};

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (letters[c]) {
      return false;
    }

    letters[c] = true;
  }

  return true;
};

console.log(isUnique("abcde"));
console.log(isUnique("abbccd"));