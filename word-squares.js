const offset = 'a'.charCodeAt(0);

class TrieNode {
  constructor() {
    this.indices = [];
    this.children = new Array(26);
  }

  insert(words, index) {
    let cur = this;
    for (let i = 0; i < words[index].length; i++) {
        const code = words[index].charCodeAt(i) - offset;

        if (cur.children[code] == null) {
            cur.children[code] = new TrieNode();
        }
        cur = cur.children[code];
        cur.indices.push(i);
    }
  }
}

const wordSquares = (words) => {
    const output = [];
    const trie = new TrieNode();

    for (let i = 0; i < words.length; i++) {
        trie.insert(words, i);
    }

    const curr = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        curr.push(word);
        wordSquaresHelper(words, trie, curr, output);
        curr.pop();
    }

    return output;
};

const wordSquaresHelper = (words, trie, curr, output) => {
    console.log(curr.slice());
    if (curr.length >= words[0].length) {
        output.push(curr.slice());
        return;
    }

    let node = trie;
    for (let i = 0; i < curr.length; i++) {
        const word = curr[i];
        node = node.children[word.charCodeAt(curr.length) - offset];
        if (node == null) {
            console.log('node null');
            return;
        }
    }

    for (let i = 0; i < node.indices.length; i++) {
        const index = node.indices[i];
        curr.push(words[index]);
        wordSquaresHelper(words, trie, curr, output);
        curr.pop();
    }
}

console.log(wordSquares(['ball', 'area', 'lead', 'lady']));
