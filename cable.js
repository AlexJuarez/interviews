
const MAX_DISTANCE = 10000;

const parseLines = (lines) => {
  const arr = lines
    .map(line => line.trim().split(' ').map(s => parseInt(s.trim(), 10)))
    .filter(arr => arr.length > 1);

  const distance = solve(arr);
  return (distance > MAX_DISTANCE) ? 'INFINITY' : `${distance}`;
};

const dist = (a, b) => Math.abs(a - b);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(p) {
    const xDiff = dist(this.x, p.x);
    const yDiff = dist(this.y, p.y);

    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
      .toFixed(4);
  }
}

const sort = (arr, compare) => arr.slice().sort(compare);

const bruteForce = (points) => {
  let min = Math.max;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = points[i].distance(points[j]);
      if (distance < min) {
        min = distance;
      }
    }
  }

  return min;
};

const stripClosest = (points, min) => {
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length && dist(points[i].y, points[j].y) < min; j++) {
      const distance = points[i].distance(points[j]);
      if (distance < min) {
        min = distance;
      }
    }
  }

  return min;
};

const closestPoint = (Px, Py) => {
  if (Px.length <= 3) {
    return bruteForce(Px);
  }

  const mid = Math.floor(Px.length / 2);
  const midPoint = Px[mid];

  const Pyl = [];
  const Pyr = [];

  for (let i = 0; i < Py.length; i++) {
    if (Py[i] <= midPoint.x) {
      Pyl.push(Py[i]);
    } else {
      Pyr.push(Py[i]);
    }
  }

  const dl = closestPoint(Px.slice(0, mid), Pyl);
  const dr = closestPoint(Px.slice(mid + 1), Pyr);

  const minDist = Math.min(dl, dr);

  const middlePoints = Py.filter(p => dist(p.x, midPoint.x) < minDist);

  return Math.min(minDist, stripClosest(middlePoints, minDist));
};

const solve = (arr) => {
  const points = arr
    .map(p => new Point(p[0], p[1]));

  const compareX = (p1, p2) => p1.x - p2.x;
  const compareY = (p1, p2) => p1.y - p2.y;

  return closestPoint(
    sort(points, compareX),
    sort(points, compareY)
  );
};

console.log(parseLines('5\n0 2\n6 67\n43 71\n39 107\n189 140\n0\n\n'.split('\n')));