/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = (intervals) => {
  let output = [];
  let interval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (curr[0] < interval[1] && curr[1] > interval[1]) {
      interval[1] = curr[1];
    } else if (curr[0] > interval[1]) {
      output.push(interval);
      interval = curr;
    }
  }

  output.push(interval);


  return output;
};