/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let i = 0;
  let j = 0;
  for (let k = 0; k < nums.length; k++) {
    const v = nums[k];
    nums[k] = 2;
    if (v < 2) {
      nums[j] = 1;
      j++;
    }
    if (v === 0) {
      nums[i] = 0;
      i++;
    }
  }
};