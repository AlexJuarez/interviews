const jump = (nums) => {
  let jumps = 0;
  let curEnd = 0;
  let curFarthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    curFarthest = Math.max(curFarthest, i + nums[i]);
    if (i === curEnd) {
      jumps++;
      curEnd = curFarthest;
    }
  }

  return jumps;
};

const input = require('./input.json');

console.log(jump(input));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 1]));
console.log(jump([1]));
