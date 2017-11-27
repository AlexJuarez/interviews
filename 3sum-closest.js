const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => b - a);
  nums.reverse();

  console.log(nums);
  const vals = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (vals.length < 3) {
      vals.push(num);
      continue;
    }

    const sum = vals.reduce((a, b) => a + b);
    let dist = Math.abs(target - sum);
    let index = null;

    for (let j = 0; j < vals.length; j++) {
      const val = vals[j];
      const newSum = sum - val + num;
      const newDist = Math.abs(target - newSum);

      if (newDist < dist) {
        dist = newDist;
        index = j;
      }
    }

    if (index != null) {
      vals[index] = num;
    }
  }
  console.log(vals);

  return vals.reduce((a, b) => a + b);
};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
