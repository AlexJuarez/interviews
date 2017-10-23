/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (i, j, arr) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const nextPermutation = function(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let j = i - 1;
    while (nums[i] > nums[j] && j > 0) {
      j--;
    }
    swap(i, j, nums);
    j++;
    i = j + 1;
    for (; j < nums.length; j++) {
      for (; i < nums.length; i++) {
        if (nums[i] < nums[j]) {
          swap(i, j, nums);
        }
      }
    }

    break;
  }

  nums.sort();
};

const nums = [1, 1, 5];

for (let i = 0; i < nums.length * 2 - 1; i++) {
  nextPermutation(nums);
  console.log(nums);
}

