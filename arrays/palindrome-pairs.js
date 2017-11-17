var palindromePairs = function(words) {
  const results = [];
  findPairs(words, results);
  return results;
};

const memoize = (fn) => {
  const mem = {};
  const toKey = (i, j) => `${i}:${j}`;

  return (...args) => {
    const key = toKey(...args);
    if (mem[key] == null) {
      mem[key] = fn(...args);
    }
    return mem[key];
  };
};

const isPalindrome = (words) => memoize((i, j) => {
  const word = words[i] + words[j];
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
});

let invocations = 0;
const findPairs = (words, results, pairs = [], visited = new Set()) => {
  invocations++;
  if (pairs.length === 2) {
    const [i, j] = pairs;
    if (isPalindrome(words)(i, j)) {
      results.push(pairs.slice());
    }

    return;
  }

  for (let i = 0; i < words.length; i++) {
    if (visited.has(i)) {
      continue;
    }

    pairs.push(i);
    const v = new Set(visited);
    v.add(i);
    findPairs(words, results, pairs, v);
    pairs.pop();
  }
};


console.log(palindromePairs(["d","baaadc","","ccadda","dbcbcca","aabb","aabdadb","bb","ccb","ada"]));
console.log(invocations);
console.log(meta);
