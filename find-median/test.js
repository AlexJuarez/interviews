const findMedian = require('./');

const str = (arr) => `[${arr.join(', ')}]`;

const t = (nums1, nums2, result) => {
  test(`${str(nums1)} ${str(nums2)}`, () => {
    expect(findMedian(nums1, nums2)).toBe(result);
  });
};

describe('findMedian', () => {
  t([1, 3], [2], 2);
  t([1, 2], [3, 4], 2.5);
  t([], [1], 1);
  t([], [2, 3], 2.5);
});