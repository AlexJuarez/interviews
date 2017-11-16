const leastInterval = (tasks, n) => {
  let t = new Array(26).fill(0);
  const offset = 'A'.charCodeAt(0);
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i].charCodeAt(0) - offset;
    t[task]++;
  }

  t.sort();
  let i = 25;
  while (i >= 0 && t[i] === t[25]) i--;

  return Math.max(tasks.length, (t[25] - 1) * (n + 1) + 25 - i);
};

console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2));