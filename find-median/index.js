const binarySearch = (arr, target, min = 0, max = arr.length) => {
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] < target) {
      min = mid + 1;
    } else  {

    }
  }
};

const findMedianSortedArrays = (nums1, nums2) => {
  if (nums2.length > nums1.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

};

module.exports = findMedianSortedArrays;
