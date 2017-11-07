class Token {
  constructor(str) {
    const symbols = str.substr(1, str.length - 2).split(' ');

    if (symbols.length === 2 || symbols[0].charAt(0) === '/') {
      this.type = symbols[0];
      this.symbol = symbols[1];
    } else {
      this.type = 'var';
      this.symbol = symbols[0];
    }

    this.children = [];
  }

  isDynamic(str) {

  }

  render(data) {
    if (this.type === 'var') {
      return data[this.symbol];
    }

    if (data[this.symbol]) {
      return this.children.map(o => {
        if (o instanceof Token) {
          return o.render(data);
        }

        return o;
      }).join('');
    }
  }
}

const peek = (arr) => arr.length && arr[arr.length - 1];

class Template {
  constructor(str) {
    this.template = this.build(this.parse(str));
  }

  build(tokens) {
    const results = [];
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token instanceof Token)

      if (!stack.length)

    }
  }

  parse(str) {
    const regex = new RegExp(/{.*?}/, 'g');
    let start = 0;
    let match = regex.exec(str);
    const tokens = [];
    while (match != null) {
      if (start < match.index) {
        tokens.push(str.substring(start, match.index));
      }
      tokens.push(match[0]);
      start = match.index + match[0].length;
      match = regex.exec(str);
    }

    if (start < str.length) {
      tokens.push(str.substring(start));
    }

    return tokens;
  }
}

const t = new Template('Hello {if test}{name}{/if}!');
