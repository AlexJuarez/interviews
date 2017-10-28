const findSubstring = (s, words) => {
  const results = [];

  if (!s.length || !words.length) {
    return results;
  }

  const counts = {};
  for (let i = 0; i < words.length; i++) {
    if (counts[i] == null) {
      counts[i] = 0;
    }

    counts[i]++;
  }
};