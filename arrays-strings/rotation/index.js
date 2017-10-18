module.exports = isRotation = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (
      a.substr(i) === b.substr(0, b.length - i) &&
      a.substr(0, i) === b.substr(b.length - i, i)
    ) {
      return true;
    }
  }

  return false;
};

console.log(isRotation("waterbottle", "erbottlewat"));
