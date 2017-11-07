class Letters {
  constructor() {
    this.letters = new Array(128).fill(0);
  }

  add(str) {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      this.letters[code]++;
    }
  }

  remove(str) {
    let success = true;
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      const count = --this.letters[code];
      if (count < 0) {
        success = false;
      }
    }

    return success;
  }

  count(char) {
    const code = char.charCodeAt(0);
    return this.letters[code];
  }
}

const minWindow = (s, t) => {
  const letters = new Letters();
  letters.add(s);
  const removed = letters.remove(t);

  return removed ? helper(letters, s) : '';
};

const helper = (letters, str, start = 0, end = str.length - 1) => {
  if (letters.count(str[start]) === 0 && letters.count(str[end]) === 0) {
    return str.substring(start, end + 1);
  }

  const result = [];

  if (letters.count(str[start]) && start < end) {
    letters.remove(str[start]);
    result.push(helper(letters, str, start + 1, end));
    letters.add(str[start]);
  }
  if (letters.count(str[end]) && end > start) {
    letters.remove(str[end]);
    result.push(helper(letters, str, start, end - 1));
    letters.add(str[end]);
  }

  if (!result.length) {
    return '';
  }

  if (result.length === 1) {
    return result[0];
  }

  return result[0].length < result[1].length ? result[0] : result[1];
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
