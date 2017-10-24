const justify = (line, maxWidth) => {
  let space = maxWidth - line.map(n => n.length).reduce((a, b) => a + b, 0);

  while (space > 0) {
    for (let i = 0; i < line.length - 1 && space > 0; i++) {
      line[i] = `${line[i]} `;
      space--;
    }
  }

  return line.join('');
};

const getLines = (words, maxWidth) => {
  const lines = [];

  let line = [];
  let lineLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (lineLength + word.length + line.length >= maxWidth && line.length) {
      lines.push(line);
      line = [];
      lineLength = 0;
    }

    line.push(word);
    lineLength += word.length;
  }

  if (line.length) {
    lines.push(line);
  }

  return lines;
};

const fullJustify = (words, maxWidth) => {
  const lines = getLines(words, maxWidth);
  let last = lines.splice(-1);
  last = last.join('');

  const output = lines.map((line) => justify(line, maxWidth));
  output.push(`${last}${new Array(maxWidth - last.length).fill(' ').join('')}`);

  return output;
};

const words = ["This", "is", "an", "example", "of", "text", "justification."];
const empty = [""];
const timeout = ["a", "b", "c", "d", "e"];

console.log(fullJustify(timeout, 3));
