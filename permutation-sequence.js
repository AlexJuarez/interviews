class Permutation {
  constructor(n) {
    this.arr = new Array(n).fill(0).map((n, i) => i);
  }

  swap(a, b) {
    const temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }

  next() {
    const { arr } = this;
    let start = arr.length - 1;
    while (start > 0 && arr[start] < arr[start - 1]) {
      start--;
    }

    if (start > 1) {
      this.swap(start, start - 1);
    }

    while (start < arr.length) {
      for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < arr[start]) {
          this.swap(i, start);
        }
      }
      start++;
    }
  }

  toString() {
    return this.arr.map(n => n + 1).join('');
  }
}

const p = new Permutation(4);

console.log(p.toString());
p.next();
console.log(p.toString());
p.next();
console.log(p.toString());
p.next();
console.log(p.toString());
p.next();

console.log(p.toString());
