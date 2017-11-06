const btoa = (str) => Buffer.from(str, 'ascii').toString('base64');
const atob = (str) => Buffer.from(str, 'base64').toString();

class URLMap {
  constructor() {
    this.id = 0;
    this.urls = [];
  }

  add(url) {
    const id = this.id;
    this.urls[id] = url;
    this.id++;

    return btoa(`${id}`);
  }

  decode(token) {
    const id = atob(token);

    return this.urls[id];
  }
}

const urls = new URLMap();

const token = urls.add('this is my string');
console.log(token);

console.log(urls.decode(token));
