const canCompleteCircuit = (gas, cost) => {
  let start = 0;
  let sum = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < 0) {
      start = (i + 1) % gas.length;
      sum = 0;
    }

    total += gas[i] - cost[i];
  }

  return total >= 0 ? start : -1;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
