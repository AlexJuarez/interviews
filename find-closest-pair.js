const closestPair = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  const diff = (start, end) => Math.abs(target - (nums[start] + nums[end]));

  while (start + 1 < end) {
    const currentDifference = diff(start, end);
    const leftDifference = diff(start + 1, end);
    const rightDifference = diff(start, end - 1);

    if (leftDifference < rightDifference && leftDifference < currentDifference) {
      start++;
    } else if (leftDifference > rightDifference && rightDifference < currentDifference) {
      end--;
    } else {
      break;
    }
  }

  return [nums[start], nums[end]];
};

console.log(closestPair([1, 2, 5, 7, 20, 90], 111));
