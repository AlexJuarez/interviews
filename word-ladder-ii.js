const canStep = (str, word) => {
  let differences = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== word[i]) {
      differences++;
    }
  }

  return differences === 1;
};

const findPath = (step, end, wordList, results, path = []) => {
  if (step === end) {
    const temp = [...path, step];
    if (temp.length < results.min) {
      results.min = temp.length;
      results.paths = [];
    }

    if (temp.length === results.min) {
      results.paths.push(temp);
    }
    return;
  }

  if (path.length >= results.min) {
    return;
  }

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    if (canStep(step, word)) {
      const words = wordList.slice();
      words.splice(i, 1);
      path.push(step);
      findPath(word, end, words, results, path);
      path.pop();
    }
  }
};

const findLadders = (beginWord, endWord, wordList) => {
  const results = { paths: [], min: wordList.length };
  findPath(beginWord, endWord, wordList, results);
  return results.paths;
};

const defTest = (start, end, words) => {
  console.log(findLadders(start, end, words));
};

defTest('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
defTest('a', 'c', ['a', 'b', 'c']);