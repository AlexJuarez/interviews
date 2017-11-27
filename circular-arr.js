const arr = [3, 0, 1, 2];

const containsCycle = (arr) => {
  let index = 0;
  let count = arr.length - 1;
  while (count >= 0) {
    index = arr[index];
    count--;

    if (index === 0) {

      return true;
    }
  }

  console.log(index);

  return index !== 0;
};

console.log(containsCycle(arr));