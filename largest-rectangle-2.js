const largestRectangle = (heights) => {
  const lessFromLeft = [];
  const lessFromRight = [];

  lessFromLeft[0] = -1;
  lessFromRight[heights.length - 1] = heights.length;

  for (let i = 1; i < heights.length; i++) {
    if (heights[i - 1] < heights[i]) {
      lessFromLeft[i] = i - 1;
    } else {
      lessFromLeft[i] = lessFromLeft[i - 1];
    }
  }

  for (let i = heights.length - 2; i >= 0; i--) {
    if (heights[i + 1] < heights[i]) {
      lessFromRight[i] = i + 1;
    } else {
      lessFromRight[i] = lessFromRight[i + 1];
    }
  }

  return Math.max(...heights.map((height, i) => {
    const width = lessFromRight[i] - lessFromLeft[i] - 1;
    return height*width;
  }));
};

console.log(largestRectangle([6, 2, 5, 4, 5, 1, 6]));


