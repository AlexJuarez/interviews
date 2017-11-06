const uniqueDigits = (month, day) => {
  const digits = [...month.split(''), ...day.split('')];
  const visited = new Set();

  return !digits.some((d) => {
    const contains = visited.has(d);
    visited.add(d);
    return contains;
  });
};

const unlock = (n) => {
  const days = new Array(31).fill(0).map((n, i) => i < 9 ? `0${i + 1}` : `${i + 1}`);
  const months = new Array(12).fill(0).map((n, i) => i < 9 ? `0${i + 1}` : `${i + 1}`);

  const results = [];
  for (let i = 0; i < months.length; i++) {
    const month = months[i];
    for (let j = 0; j < days.length; j++) {
      const day = days[j];
      if (!uniqueDigits(month, day)) {
        continue;
      }

      results.push(month + day);

      if (results.length === n) {
        return results;
      }
    }
  }

  return results;
};

console.log(unlock(4));