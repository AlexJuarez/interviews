/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findPivot = (nums) => {
  let min = 0;
  let max = nums.length - 1;

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    console.log(min, max, mid);
    if (nums[mid] < nums[max]) {
      max = mid - 1;
    } else if (nums[mid] >= nums[min]) {
      min = mid + 1;
    }
  }

  return min;
};

const binarySearch = (nums, target, min = 0, max = nums.length - 1) => {

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    if (nums[mid] < target) {
      min = mid + 1;
    } else if (nums[mid] > target) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return (nums[min] === target) ? min : -1;
};

const search = (nums, target) => {
  const pivot = findPivot(nums);
  console.log(`pivot: ${pivot}`);

  if (pivot > 0 && target >= nums[0] && target <= nums[pivot - 1]) {
    return binarySearch(nums, target, 0, pivot - 1);
  }

  return binarySearch(nums, target, pivot);
};

console.log(search([5, 1, 3], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2], 7));
console.log(search([3, 1], 1));
console.log(search([3, 4, 5, 6, 1, 2]));