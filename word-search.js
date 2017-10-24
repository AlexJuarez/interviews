class Node {
  constructor(letter, row, col) {
    this.letter = letter;
    this.row = row;
    this.col = col;
    this.siblings = [];
  }
}

const exist = (board, word) => {
  const paths = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const letter = board[i][j];
      board[i][j] = new Node(letter, i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const node = board[i][j];

      if (i - 1 >= 0) {
        node.siblings.push(board[i - 1][j]);
      }

      if (i + 1 < board.length) {
        node.siblings.push(board[i + 1][j]);
      }

      if (j - 1 >= 0) {
        node.siblings.push(board[i][j - 1]);
      }

      if (j + 1 < board[i].length) {
        node.siblings.push(board[i][j + 1]);
      }

      if (paths[node.letter] == null) {
        paths[node.letter] = [];
      }

      paths[node.letter].push(node);
    }
  }

  const queue = paths[word.charAt(0)].map((node) => ({
    node,
    word: word.substring(1),
    visited: [node],
  }));

  while (queue.length) {
    const { node, word, visited } = queue.pop();

    if (!word.length) {
      return true;
    }

    const nodes = node.siblings.filter((n) =>
      n.letter === word.charAt(0) && visited.indexOf(n) === -1
    );

    for (let i = 0; i < nodes.length; i++) {
      queue.push({ node: nodes[i], word: word.substring(1), visited: [...visited, nodes[i]] });
    }
  }

  return false;
};

const board = [
  ['A', 'B', 'C'],
  ['S', 'F', 'C'],
  ['A', 'D', 'E']
];

console.log(exist(board, 'ABCC'));
