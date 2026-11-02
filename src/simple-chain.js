const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    const link = value === undefined ? '' : String(value);
    this.chain.push(`( ${link} )`);
    return this;
  },

  removeLink(position) {
    const isValid =
      typeof position === 'number' &&
      Number.isInteger(position) &&
      position >= 1 &&
      position <= this.chain.length;

    if (!isValid) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
