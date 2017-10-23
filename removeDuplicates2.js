const removeDuplicates = (nums) => {
  if (nums == null || !nums.length) {
     return 0;
  }

  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      index++;
      nums[index] = nums[i];
    }
  }

  return index + 1;
};

console.log(removeDuplicates([1, 1, 2]));