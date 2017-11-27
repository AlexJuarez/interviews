var candy = function(ratings) {
  const candies = new Array(ratings.length).fill(1);
  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      candies[i + 1] = candies[i] + 1;
    }
  }

  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1)
    }
  }

  return candies.reduce((a, b) => a + b, 0);
};

const t = (ratings) => {
  console.log(candy(ratings));
};

t([1, 2, 2, 1], 6);
t([1, 3, 3, 3, 2, 1], 10);
t([2, 3, 2], 4);
