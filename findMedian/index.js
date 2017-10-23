const find = (arr, target, min = 0, max = arr.length - 1) => {
  while (min < max) {
    const mid = Math.floor((min + max) / 2);

    if (arr[mid] < target) {
      min = mid + 1;
    } else if (arr[mid] > target) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return min;
};

module.exports = (nums1, nums2) => {
  let i = 0;
  let j = 0;

  const size = nums1.length + nums2.length;

  while (i + j < Math.floor(size / 2) - 1) {
    if (j < nums2.length - 1 && nums1[i] > nums2[j]) {
      j = find(nums2, nums1[i], j);
    } else {
      i = find(nums1, nums2[j], i);
    }
  }

};