const createLines = (words, maxWidth) => {
  const lines = [];
  let width = 0;
  let line = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (width + word.length + line.length > maxWidth) {
      lines.push(line);
      line = [word];
      width = word.length;
    } else {
      width += word.length;
      line.push(word);
    }
  }

  if (line.length) {
    lines.push(line);
  }

  return lines;
};

const formatLine = (line, maxWidth) => {
  const width = line.map(w => w.length).reduce((a, b) => a + b);
  const space = maxWidth - width;

  if (line.length === 1) {
    return line[0] + ' '.repeat(space);
  }

  console.log(width);
  const padding = Math.floor(space / (line.length - 1));
  const left = space % (line.length - 1);

  let result = '';
  line.forEach((word, i) => {
    result += word;
    if (i < line.length - 1) {
      result += i < left ? ' '.repeat(padding + 1) : ' '.repeat(padding);
    }
  });

  return result;
};

var fullJustify = function(words, maxWidth) {
  const lines = createLines(words, maxWidth);
  const output = [];

  for (let i = 0; i < lines.length - 1; i++) {
    output.push(formatLine(lines[i], maxWidth));
  }

  let lastLine = lines[lines.length - 1].join(' ');
  lastLine += ' '.repeat(maxWidth - lastLine.length);
  output.push(lastLine);

  return output;
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
