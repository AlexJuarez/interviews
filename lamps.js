class Lamps {
  constructor(lamps) {

    this.rows = new Set();
    this.cols = new Set();
    this.diagLeft = new Set();
    this.diagRight = new Set();

    for (let i = 0; i < lamps.length; i++) {
      const [x, y] = lamps[i];

      this.rows.add(y);
      this.cols.add(x);
      this.diagRight.add(x - y);
      this.diagLeft.add(x + y);
    }
  }

  query(x, y) {
    return this.cols.has(x) || this.rows.has(y) || this.diagRight.has(x - y) || this.diagLeft.has(x + y);
  }
}

const lamps = new Lamps([[1, 1], [3, 0]]);

console.log(lamps.query(0, 0));
console.log(lamps.query(0, 2));
console.log(lamps.query(2, 2));
console.log(lamps.query(2, 3));

