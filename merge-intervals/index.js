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
  intervals.sort((a, b) => a.start - b.start);

  let output = [];
  let interval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (curr.start <= interval.end && curr.end > interval.end) {
      interval.end = curr.end;
    } else if (curr.start > interval.end) {
      output.push(interval);
      interval = curr;
    }
  }

  if (interval != null) {
    output.push(interval);
  }

  return output;
};