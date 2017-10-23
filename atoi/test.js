const atoi = require('./');

const t = (input, result) => {
  test(input, () => {
    expect(atoi(input)).toBe(result);
  });
};

describe('atoi', () => {
  t('0', 0);
  t('+-2', 0);
  t('    010', 10);
  t('     +004500', 4500);
  t('  -0012a42', -12);
  t('2147483648', 2147483647);
});