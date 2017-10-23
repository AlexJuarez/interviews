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

const findCombinations = (canidates, target, nums, output, start = 0) => {
  if (target === 0) {
    output.push(nums.slice());
    return;
  }

  for (let i = start; i < canidates.length && canidates[i] <= target; i++) {
    const num = canidates[i];
    const sum = target - num;
    nums.push(num);
    if (sum === 0) {
      output.push(nums.slice());
    } else {
      findCombinations(canidates, sum, nums, output, i);
    }
    nums.pop();
  }
};

module.exports = combinationSum;