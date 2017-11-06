/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
  const n = nums.map(n => `${n}`).sort((a, b) => a.localeCompare(b));

  console.log(n);
};

largestNumber([3, 30, 34, 5, 9]);
