// Write a logger with the functions
// get_hits
// log_hit
// Return all of the hits that happened in the last Six Minutes

const binarySearch = (arr1, target) => {
  let min = 0;
  let max = arr1.length;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr1[mid] < target) {
      min = mid + 1;
    } else if (arr1[mid] > target) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return min;
};

class Logger {
  constructor() {
    this.timestamps = [];
    this.counts = [];
  }

  getTimeStamp() {
    return Math.floor(new Date() / 1000);
  }

  prune() {
    const time = this.getTimeStamp() - 6*60;
    const index = binarySearch(this.timestamps, time);

    this.timestamps = this.timestamps.slice(index);
    this.counts = this.counts.slice(index);
  }

  log_hit() {
    const now = this.getTimeStamp();
    const lastIndex = this.timestamps.length - 1;
    if (lastIndex >= 0 && this.timestamps[lastIndex] === now) {
      this.counts[lastIndex]++;
    } else {
      this.prune();
      this.timestamps.push(now);
      this.counts.push(1);
    }
  }

  get_hits() {
    this.prune();

    return this.counts.reduce((a, b) => a + b, 0);
  }
}
const oldDate = Date;
const genDate = (val) => {
  return function () {
    return new oldDate(val);
  };
};

const log = new Logger();
Date = genDate(new oldDate() - 7*60*1000);
log.log_hit();
log.log_hit();
Date = genDate(new oldDate() - 5*60*1000);
log.log_hit();
log.log_hit();

console.log(log.get_hits());
console.log(log);
