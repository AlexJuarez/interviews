const charCode = (char) => char.charCodeAt(0) - 97;

class Node {
  constructor() {
    this.children = Array(26);
    this.isWord = false;
  }

  has(char) {
    return this.get(char) != null;
  }

  get(char) {
    return this.children[charCode(char)];
  }

  add(char) {
    if (!this.has(char)) {
      this.children[charCode(char)] = new Node();
    }

    return this.get(char);
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      curr = curr.add(char);
    }
    curr.isWord = true;
    this.size++;
  }

  get (word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.has(char)) {
        return null;
      }

      curr = curr.get(char);
    }

    return curr;
  }

  search(word) {
    const result = this.get(word);
    return result != null && result.isWord;
  }

  startsWith(prefix) {
    const result = this.get(prefix);
    return result != null;
  }
}

const trie = new Trie();

trie.insert("abc");
trie.insert("ade");

console.log(trie.search("abc"));
console.log();
