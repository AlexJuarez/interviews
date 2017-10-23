const helper = (str, letters, output) => {
  if (!letters.length) {
    output.push(str);
    return;
  }

  letters.forEach((l, i) => {
    const remainingLetters = letters.slice(0);
    remainingLetters.splice(i, 1);
    helper(str + l, remainingLetters, output);
  });

};

const permutations = (str) => {
  const output = [];
  helper('', str.split(''), output);

  return output;
};


console.log(permutations('cat'));