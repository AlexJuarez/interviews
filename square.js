const dist = (a, b) => Math.abs(a - b);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(p) {
    const xDiff = dist(this.x, p.x);
    const yDiff = dist(this.y, p.y);

    return Math.pow(xDiff, 2) + Math.pow(yDiff, 2);
  }
}

const processLines = (lines) => {
  lines
    .filter(line => line.length)
    .forEach(line => {
      const points = line
        .match(/\d,\d/g)
        .map(s => {
          const P = s.split(',').map(n => parseInt(n.trim()));
          return new Point(P[0], P[1]);
        });

      console.log(isSquare(points));
    });
};

const isSquare = (points) => {
  const [p1, p2, p3, p4] = points;

  const [d1, d2, d3] = points.slice(1).map(p => p.distance(p1));

  if (d1 === d2 && 2*d1 === d3) {
    const d = p2.distance(p4);

    return d === p3.distance(p4) && d === d1;
  }

  if (d2 === d3 && 2*d2 === d1) {
    const d = p2.distance(p3);

    return d === p2.distance(p4) && d === d2;
  }

  if (d1 === d3 && 2*d1 === d2) {
    const d = p2.distance(p3);

    return d === p3.distance(p4) && d === d1;
  }

  return false;
};

processLines('(4,6), (5,5), (5,6), (4,5)'.split('\n'));