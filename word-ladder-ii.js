/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const results = [];
  const words = wordGraph(wordList);
  findLadder(beginWord, endWord, wordList, results);
  return results;
};

const wordGraph = (words) => {
  const graph = {};
}

const findLadder = (beginWord, endWord, wordList, results, visited = new Set(), result = [beginWord]) => {
  if (!wordList.length) {
    return;
  }

  if (results.length && result.length > results[0].length) {
    return;
  }

  if (beginWord === endWord) {
    if (results.length && result.length < results[0].length) {
      results.splice(0, results.length);
    }

    if (!results.length || result.length === results[0].length) {
      results.push(result.slice());
    }
    return;
  }

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    if (visited.has(word)) {
      continue;
    }

    if (!isValid(beginWord, word)) {
      continue;
    }

    result.push(word);
    visited.add(word);
    findLadder(word, endWord, remove(wordList)(i), results, visited, result);
    visited.delete(word);
    result.pop();
  }
};

const memoize = (fn) => {
  const mem = {};

  const key = (o) => JSON.stringify(o);

  return (...args) => {
    const k = key(args);
    if (mem[k] == null) {
      mem[k] = fn(...args);
    }

    return mem[k];
  };
};

const remove = (arr) => memoize((i) => arr.slice(0, i).concat(arr.slice(i + 1)));

const isValid = memoize((start, end) => {
  let differences = 0;
  for (let i = 0; i < start.length; i++) {
    if (start.charAt(i) !== end.charAt(i)) {
      differences++;
    }

    if (differences > 1) {
      return false;
    }
  }

  return differences === 1;
});

// console.log(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
// console.log(findLadders('hot', 'dog', ['hot', 'dog', 'dot']));

const input = {
  begin: "qa",
  end: "sq",
  words: ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
};

console.log(findLadders(input.begin, input.end, input.words));
