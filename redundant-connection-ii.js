const findRedundantDirectedConnection = function(edges) {
  const parent = new Array(edges.length + 1).fill(0);

  let can1 = null;
  let can2 = null;

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const [start, end] = edge;

    if (parent[end] === 0) {
      parent[end] = start;
    } else {
      can1 = [parent[end], end];
      can2 = edge.slice();
      edge[1] = 0;
    }
  }

  for (let i = 0; i < edges.length; i++) {
    parent[i] = i;
  }

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const [start, end] = edge;

    if (end === 0) {
      continue;
    }

    if (root(parent, start) === end) {
      return can1 != null ? can1 : edge;
    }

    parent[end] = start;
  }

  return can2;
};

const root = (parent, target) => {
  while (target !== parent[target]) {
    parent[target] = parent[parent[target]];
    target = parent[target];
  }

  return target;
};

const test = (arr, expect) => {
  console.log(findRedundantDirectedConnection(arr));
};

test([[2, 1], [3, 1], [4, 2], [1, 4]]); // [2, 1]
test([[1, 2], [1, 3], [2, 3]]); // [2, 3]
test([[4,2],[1,5],[5,2],[5,3],[2,4]]); // [4, 2]