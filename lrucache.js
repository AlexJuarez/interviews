class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.root = new Node(null);
    this.tail = this.root;
    this.size = 0;
  }

  update(node) {
    if (node.prev == null) {
      return;
    }

    if (node.prev != null) {
      node.prev.next = node.next;
    }

    if (node.next != null) {
      node.next.prev = node.prev;
    }

    node.next = this.root;
    node.prev = null;
    this.root.prev = node;
    this.root = node;
  }

  add(key) {
    const node = new Node(key);
    node.next = this.root;
    this.root.prev = node;

    this.size++;
    this.root = node;
    return node;
  }

  remove() {
    const node = this.tail.prev;
    if (node.prev != null) {
      this.tail.prev.prev.next = this.tail;
      this.tail.prev = this.tail.prev.prev;
    } else {
      this.root = this.tail;
    }
    this.size--;
    return node.val;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.data = new LinkedList();
    this.size = 0;
  }

  get(key) {
    if (!this.cache.hasOwnProperty(key)) {
      return -1;
    }

    const { value, node } = this.cache[key];

    this.data.update(node);
    return value;
  }

  put(key, value) {
    if (this.size + 1 > this.capacity) {
      const oldKey = this.data.remove();
      delete this.cache[oldKey];
    } else {
      this.size++;
    }

    const node = this.data.add(key);
    this.cache[key] = { value, node };
  }
}

const cache = new LRUCache(2);
console.log([
  cache.put(2),
  cache.put(1, 1),
  cache.put(2, 2),
  cache.get(1),
  cache.put(3, 3),
  cache.get(2),
  cache.put(4, 4),
  cache.get(1),
  cache.get(3),
  cache.get(4)
]);

const cache2 = new LRUCache(1);
console.log([
  cache2.put(2, 1),
  cache2.get(2),
  cache2.put(3, 2)
]);