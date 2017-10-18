/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
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

//console.log(combinationSum([2, 3, 6, 7], 7));

console.log(combinationSum([10,1,2,7,6,1,5], 8));

//console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));

