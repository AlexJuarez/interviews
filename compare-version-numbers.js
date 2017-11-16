class Version {
  constructor(str) {
    this.versions = str.split('.').map(n => parseInt(n, 10));
  }

  compare(v) {
    const { major, minor } = this;
    let difference = 0;
    if (difference === 0) {
      difference = minor - v.minor;
    }

    if (difference > 0) {
      return 1;
    }

    if (difference < 0) {
      return -1;
    }

    return 0;
  }
}

const compareVersion = function(version1, version2) {
  const v1 = new Version(version1);
  const v2 = new Version(version2);

  console.log(v1);
  console.log(v2);

  return v1.compare(v2);
};

console.log(compareVersion('01', '1'));