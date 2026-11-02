const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n);
  return Math.max(
    ...digits.split('').map((_, i) => Number(digits.slice(0, i) + digits.slice(i + 1))),
  );
}

module.exports = {
  deleteDigit
};
