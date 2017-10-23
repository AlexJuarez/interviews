/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  const targets = candidates
    .slice()
    .sort((a, b) => a - b);

  const output = {};
  findCombinations(targets, target, [], output);
  return Object.values(output);
};

const findCombinations = (canidates, target, nums, output, start = 0) => {
  if (target === 0) {
    const key = nums.join(',');
    output[key] = nums.slice();
    return;
  }

  for (let i = start; i < canidates.length && canidates[i] <= target; i++) {
    const num = canidates[i];
    const sum = target - num;

    nums.push(num);
    findCombinations(canidates, sum, nums, output, i + 1);
    nums.pop();
  }
};

module.exports = combinationSum2;
