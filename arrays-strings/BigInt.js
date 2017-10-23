class BigInt {
  constructor(input) {
    if (Array.isArray(input)) {
      this.value = input;
    } else {
      this.value = input.split("").reverse().map((c) => parseInt(c, 10));
    }
  }

  add(o) {
    const results = [];
    o.value.forEach((d, i) => {
      results[i] = d;
    });

    let r = 0;
    for (let i = 0; i < this.value.length; i++) {
      const value = (results[i] || 0) + this.value[i] + r;
      results[i] = value % 10;
      r =  Math.floor(value / 10);
    }

    if (r) {
      results[results.length] = r;
    }
    return new BigInt(results);
  }

  multiply(o) {
    if (o.value.length === 1) {
      const results = [];

      let r = 0;
      this.value.forEach((d, i) => {
        const value = r + d * o.value[0];
        results[i] = value % 10;
        r = Math.floor(value / 10)
      });
      if (r % 10) {
        results[results.length] = r % 10;
      }
      if (r / 10) {
        results[results.length + 1] = Math.round(r / 10);
      }
      return new BigInt(results);
    }

    const offset = (size) => (new Array(size)).map(d => 0);

    let result = new BigInt([0]);
    this.value.forEach((d, i) => {
      const mut = o.multiply(new BigInt([d]));
      mut.value.unshift.apply(mut.value, offset(i));
      result = result.add(mut);
    });

    return result;
  }

  toString() {
    return this.value.reverse().join("");
  }
}

const x = new BigInt("1000000");
const y = x.multiply(new BigInt("400"));

console.log(x.toString(), y.toString());