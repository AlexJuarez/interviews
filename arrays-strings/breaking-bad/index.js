const elements = ["L", "Le", "Lex", "Jur", "Re"];

const makeElementTree = (elements) => {
  const tree = {};
  elements.map((element) => {
    let curr = tree;
    for (let i = 0; i < element.length; i++) {
      const c = element[i].toLowerCase();
      if (curr[c] == null) {
        curr[c] = {};
      }

      curr = curr[c];
    }

    curr.result = element;
  });

  return tree;
};

const elementTree = makeElementTree(elements);

const getElement = (str) => {
  let tree = elementTree;
  let result = tree && tree.result;
  for (let i = 0; i < str.length && tree != null; i++) {
    const char = str[i];
    tree = tree[char.toLowerCase()];
    if (tree != null && tree.result != null) {
      result = tree.result;
    }
  }

  return result;
};

const parseWord = (word) => {
  for (let i = 0; i < word.length; i++) {
    const element = getElement(word.substr(i));
    if (element != null) {
      return word.substring(0, i) + "[" + element + "]" + word.substr(i + element.length);
    }
  }

  return word;
};

const checkWords = (str) => {
  return str.split(" ").map(parseWord).join(" ");
};

console.log(checkWords("Alex Juarez"));