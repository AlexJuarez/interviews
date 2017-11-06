const search = (nums, target) => {
  return searchHelper(nums, target);
};

const searchHelper = (nums, target, min = 0, max = nums.length - 1) => {
  if (min >= max) {
    return (nums[min] === target) ? min : -1;
  }

  if (nums[min] > nums[max]) {
    const mid = Math.floor((min + max) / 2);
    const l = searchHelper(nums, target, min, mid);
    return l !== -1 ? l : searchHelper(nums, target, mid + 1, max);
  }

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (nums[mid] < target) {
      min = mid + 1;
    } else if (nums[mid] > target) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 7));
