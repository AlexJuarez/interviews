class Node {
  constructor(vals) {
    this.val = vals[0];
    this.next = vals.length > 1 ? new Node(vals.slice(1)) : null;
  }

  toString() {
    let curr = this;
    const output = [];
    while (curr !== null) {
      output.push(curr.val);
      curr = curr.next;
    }

    return output.join('->');
  }
}

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

const list = new Node([1, 2, 3, 4, 5]);

console.log(reverseList(list).toString());
