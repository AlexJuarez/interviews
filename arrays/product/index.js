const arrayProduct = (numbers) => {
  const leftProduct = (new Array(numbers.length)).fill(1);
  const rightProduct = (new Array(numbers.length)).fill(1);

  for (let i = 0; i < numbers.length - 1; i++) {
    leftProduct[i + 1] = numbers[i]*leftProduct[i];
  }

  for (let i = numbers.length - 1; i > 0; i--) {
    rightProduct[i-1] = numbers[i]*rightProduct[i];
  }

  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result[i] = leftProduct[i]*rightProduct[i];
  }

  return result;
};

module.exports = arrayProduct;

console.log(arrayProduct([1, 2, 3, 4]));