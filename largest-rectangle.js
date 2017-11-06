const peek = (arr) => arr.length && arr[arr.length - 1];

const largestRectangle = (heights) => {
  let maxArea = 0;
  const stack = [];

  let i = 0;
  while (i < heights.length) {
    if (!stack.length || heights[peek(stack)] <= heights[i]) {
      stack.push(i++);
      continue;
    }

    const top = stack.pop();
    const width = !stack.length ? i : i - peek(stack) - 1;
    const area = heights[top] * width;

    if (area >= maxArea) {
      maxArea = area;
    }
  }

  while (stack.length) {
    const top = stack.pop();
    const width = !stack.length ? i : i - peek(stack) - 1;
    const area = heights[top] * width;

    if (area >= maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
};

console.log(largestRectangle([6, 2, 5, 4, 5, 1, 6]));
