/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const search = (intervals, target, min = 0, max = intervals.length - 1) => {
  while (min <= max && max !== 0) {
    const mid = Math.floor((min + max) / 2);

    if (intervals[mid].end > target && intervals[mid].start < target) {
      return mid;
    } else if (intervals[mid].end < target) {
      min = mid + 1;
    } else if (intervals[mid].start < target) {
      min = mid;
    } else if (intervals[mid].start > target) {
      max = mid - 1;
    } else if (intervals[mid].end > target) {
      max = mid;
    }
  }

  return min > max ? max : min;
};

const toInterval = (arr) => {
  return new Interval(arr[0], arr[1]);
};

const merge = (intervals, newInterval) => {
  const start = Math.min(...intervals.map(i => i.start), newInterval.start);
  const end = Math.max(...intervals.map(i => i.end), newInterval.end);

  return new Interval(start, end);
};

const insert = (intervals, newInterval) => {
  const start = search(intervals, newInterval.start);
  let end = search(intervals, newInterval.end);

  if (
    newInterval.start > intervals[end].start && newInterval.start < intervals[end].end ||
    newInterval.end > intervals[end].start && newInterval.end < intervals[end].end
  ) {
    end++;
  }

  const interval = merge(intervals.slice(start, end), newInterval);
  const result = intervals.slice();
  result.splice(start, end - start, interval);

  return result;
};

const doInsert = (arr, target) => {
  const intervals = arr.map(toInterval);
  const interval = toInterval(target);

  return insert(intervals, interval);
};

// const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]].map(toInterval);
// const addInterval = toInterval([4, 9]);

// const intervals = [[1, 3], [6, 9]].map(toInterval);
// const addInterval = toInterval([2, 5]);

console.log(doInsert([[1, 5]], [5, 7]));
console.log(doInsert([[1, 5]], [6, 8]));

console.log(doInsert([[1, 3], [6, 9]], [2, 5]));
