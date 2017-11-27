const duplicate = (str, n) => new Array(n).fill(str).join('');

const decompress = (str) => {
  const stack = [];

  let before = '';
  for (let i = 0; i < str.length; i++) {
    let j = 0;
    while (/[0-9]/.test(str[i + j])) {
      j++;
    }
    const count = parseInt(str.substr(i, j), 10);
    i += j;

    switch (str[i]) {
      case '[':
        stack.push({ before, count });
        before = '';
        break;
      case ']':
        const curr = stack.pop();
        before = curr.before + duplicate(before, curr.count);
        console.log(curr);
        break;
      default:
        before += str[i];
    }
  }

  return before;
};

decompress('a3[b2[c1[d]]]e');