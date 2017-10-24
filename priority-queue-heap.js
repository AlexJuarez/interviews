class PriorityQueue {
  constructor(comparator, max) {
    this.comparator = comparator;
    this.max = max;
    this.size = 0;
    this.data = [null];
  }

  swap (i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  bubbleUp(index) {
    const comparator = (i, j) => this.comparator(this.data[i], this.data[j]);
    while (index > 1 && comparator(index, Math.floor(index / 2)) > 0) {
      const parent = Math.floor(index / 2);
      this.swap(index, parent);
      index = parent;
    }
  }

  bubbleDown() {
    let index = 1;
    const comparator = (i, j) => this.comparator(this.data[i], this.data[j]);
    while (index < this.size) {
      const leftIndex = index * 2;
      const rightIndex = leftIndex + 1;
      if (comparator(index, leftIndex) < 0) {
        this.swap(index, leftIndex);
        index = leftIndex;
        continue;
      }

      if (comparator(index, rightIndex) < 0) {
        this.swap(index, rightIndex);
        index = rightIndex;
        continue;
      }

      break;
    }
  }

  add(val) {
    this.size++;
    const index = this.size;
    this.data[index] = val;
    this.bubbleUp(index);
  }

  peek() {
    return this.data[1];
  }

  remove() {
    const result = this.data[1];
    this.swap(1, this.size);
    this.data.length = this.size;
    this.size--;
    this.bubbleDown();
    return result;
  }
}

const pq = new PriorityQueue((a, b) => a - b);

const addAll = (nums) => {
  nums.forEach((num) => {
    pq.add(num);
  });
};

addAll([5, 6, 7, 9]);
