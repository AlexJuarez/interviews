/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  const targets = candidates
    .slice()
    .sort((a, b) => a - b);

  const output = [];
  findCombinations(targets, target, [], output);
  return output;
};

const findCombinations = (candidates, target, nums, output, start = 0) => {
  if (target === 0) {
    output.push(nums.slice());
    return;
  }

  for (let i = start; i < candidates.length && candidates[i] <= target; i++) {
    const num = candidates[i];
    const sum = target - num;
    nums.push(num);
    if (sum === 0) {
      output.push(nums.slice());
    } else {
      findCombinations(candidates, sum, nums, output, i);
    }
    nums.pop();
  }
};

module.exports = combinationSum;