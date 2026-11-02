const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let i = 0;

  while (i < str.length) {
    let count = 1;
    while (i + count < str.length && str[i + count] === str[i]) {
      count++;
    }

    if (count > 1) {
      result += count + str[i];
    } else {
      result += str[i];
    }

    i += count;
  }

  return result;
}

module.exports = {
  encodeLine
};
