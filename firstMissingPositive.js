/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    let num = nums[i];
    let prev = num;

    while (num > 0 && nums[num - 1] !== prev) {
      num = nums[num - 1];
      nums[prev - 1] = prev;
      prev = num;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

const nums = [3, 4, -1, 1];

console.log(firstMissingPositive(nums));

console.log(nums);
