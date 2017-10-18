const pad = (s, count) => count >= 1 ? Array(count).fill(s).join("") : "";

const justify = (words, width) => {
  const len = words.map(w => w.length).reduce((a, b) => a + b, 0);
  const padding = words.length < 2 ? 1 : (width - len) / (words.length - 1);
  let w = (width - len);
  let output = "";
  words.forEach((word, i) => {
    output += word;
    if (w > 0) {
      let p = i < words.length / 2 ? pad(" ", Math.ceil(padding)) : pad(" ", Math.floor(padding));
      w = w - p.length;
      output += p;
    }
  });

  return output;
};

const partition = (words, maxLength) => {
  const output = [];
  let group = [];
  let len = 0;
  words.forEach((word) => {
    if (len + word.length > maxLength) {
      output.push(group);
      len = 0;
      group = [];
    }

    group.push(word);
    len += word.length + 1;
  });

  if (group.length) {
    output.push(group);
  }

  return output;
};

const fullJustify = (words, maxWidth) => {
  const parts = partition(words, maxWidth);
  return parts.map((arr, i) => {
    if (i < parts.length - 1) {
      return justify(arr, maxWidth)
    }

    return arr.join(" ");
  }).map((line) => `${line}${pad(" ", maxWidth - line.length)}`);
};

const test = ["Give","me","my","Romeo;","and,","when","he","shall","die,","Take","him","and","cut","him","out","in","little","stars,","And","he","will","make","the","face","of","heaven","so","fine","That","all","the","world","will","be","in","love","with","night","And","pay","no","worship","to","the","garish","sun."];

console.log(fullJustify(["What","must","be","shall","be."], 12));
console.log(fullJustify(test, 25));