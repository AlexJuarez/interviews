const helper = (results, nums, temp = [], start = 0) => {
  results.push(temp.slice());

  for (let i = start; i < nums.length; i++) {
    if (i !== start && nums[i] === nums[i - 1]) {
      continue;
    }
    const num = nums[i];
    temp.push(num);
    helper(results, nums, temp, i + 1);
    temp.pop();
  }
};

const subsetsWithDup = (nums) => {
  nums.sort();
  const results = [];
  helper(results, nums);
  return results;
};

console.log(subsetsWithDup([1, 2, 2]));
