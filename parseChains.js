const validateChain = (str) => {
  const pairs = str
    .trim()
    .split(';')
    .map(s => s.split('-'));

  const visited = {};
  let size = 0;
  const directions = {};
  let begin = null;
  let end = null;

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];

    if (pair[0] === 'BEGIN') {
      begin = pair[1];
      continue;
    }

    if (pair[1] === 'END') {
      end = pair[0];
      continue;
    }

    if (directions[pair[0]] != null) {
      return false;
    }

    size++;
    visited[pair[0]] = false;
    directions[pair[0]] = pair[1];
  }

  let current = begin;
  while (current != end && !visited[current]) {
    visited[current] = true;
    size--;
    current = directions[current];
  }

  return size === 0 && current === end;
};

console.log(validateChain('BEGIN-3;4-2;3-4;2-END'));