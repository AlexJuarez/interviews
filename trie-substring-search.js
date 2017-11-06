class Trie {
  constructor(value = null) {
    this.children = new Array(26);
    this.value = value;
    this.offset = 'a'.charCodeAt(0);
  }

  getCharCode(str, i) {
    return str.charCodeAt(i) - this.offset;
  }

  addChild(str) {
    if (!str.length) {
      return;
    }

    const code = this.getCharCode(str, 0);

    if(!this.children[code]) {
      this.children[code] = new Trie(str.substr(1));
    } else {
      this.children[code].add(str.substr(1));
    }
  }

  add(str) {
    for (let i = 0; i < str.length; i++) {
      if (this.value == null) {
        this.addChild(str);
        return;
      }

      if (i > this.value.length) {
        this.addChild(str.substr(i + 1));
        return;
      }

      if (this.value[i] !== str[i]) {
        this.value = this.value.substr(0, i);
        this.addChild(str.substr(i));
        return;
      }
    }

    if (this.value.length > str.length) {
      const { value } = this;
      this.value = value.substr(0, str.length);
      this.addChild(value.substr(str.length));
    }
  }

  contains(str) {
    if (str == this.value) {
      return true;
    }

    let i = 0;
    while (this.value != null && this.value[i] === str[i]) {
      i++;
      if (i >= this.value.length) {
        i--;
        break;
      }
    }

    const code = this.getCharCode(str, i);

    if (this.children[code] != null) {
      return this.children[code].contains(str.substr(i + 1));
    }

    return false;
  }
}

const tree = new Trie();

const str = 'banana';

for (let i = 0; i < str.length; i++) {
  tree.add(str.substr(i));
}

console.log(tree.contains('ana'));
