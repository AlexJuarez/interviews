const removeDuplicates = (nums) => {
  if (!nums.length) {
    return nums;
  }

  let count = 1;
  let num = nums[0];
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num && count > 1) {
      continue;
    }

    if (nums[i] === num) {
      count++;
    } else {
      num = nums[i];
      count = 1;
    }

    nums[index++] = num;
  }

  nums.length = index;

  return nums.length;
};

const test = [1, 1, 1, 2, 2, 3];

console.log(removeDuplicates(test));

console.log(test);
