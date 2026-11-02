const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const FLAGS = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const isFlag = (value) => FLAGS.includes(value);

  const result = [];
  const deleted = new Array(arr.length).fill(false);

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === '--discard-next') {
      if (i + 1 < arr.length && !isFlag(arr[i + 1])) {
        deleted[i + 1] = true;
      }
    } else if (el === '--double-next') {
      if (i + 1 < arr.length && !isFlag(arr[i + 1])) {
        result.push(arr[i + 1]);
      }
    } else if (el === '--discard-prev') {
      if (i - 1 >= 0 && !isFlag(arr[i - 1]) && !deleted[i - 1]) {
        result.splice(result.lastIndexOf(arr[i - 1]), 1);
      }
    } else if (el === '--double-prev') {
      if (i - 1 >= 0 && !isFlag(arr[i - 1]) && !deleted[i - 1]) {
        result.push(arr[i - 1]);
      }
    } else if (!deleted[i]) {
      result.push(el);
    }
  }

  return result;
}

module.exports = {
  transform
};
