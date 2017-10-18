const merge = (nums1, nums2, n = nums1.length, m = nums2.length) => {
  let i = 0;
  let j = 0;

  for (let i = 0; i < n + m; i++) {
    console.log(nums1, nums2);
    if (i > m - 1) {
      nums1[i] = nums2[j++];
      continue;
    }

    if (nums1[i] < nums2[j] || nums2[j] == null) {
      continue;
    }

    const temp = nums1[i];
    nums1[i] = nums2[j];
    nums2[j] = temp;
  }
};

const test1 = [4, 5, 6];
const test2 = [1, 2, 3];

merge(test1, test2);
console.log(test1);
