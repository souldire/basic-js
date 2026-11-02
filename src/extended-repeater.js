const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let additionBlock = '';
  if (options.addition !== undefined) {
    const additions = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additions.push(String(options.addition));
    }
    additionBlock = additions.join(additionSeparator);
  }

  const blocks = [];
  for (let i = 0; i < repeatTimes; i++) {
    blocks.push(String(str) + additionBlock);
  }

  return blocks.join(separator);
}

module.exports = {
  repeater
};
