const levelOrder = (root) => {
  const queue = [root];
  let count = 1;

  const output = [];

  while (queue.length) {
    const level = Math.floor(Math.log2(count));
    console.log(level, Math.log2(count));
    const curr = queue.shift();
    count++;

    if (curr == null) {
      continue;
    }

    if (output[level] == null) {
      output[level] = [];
    }

    output[level].push(curr.val);
    queue.push(curr.left, curr.right);
  }

  return output;
};
