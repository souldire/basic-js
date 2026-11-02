const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct !== false;
  }

  encrypt(message, key) {
    return this.process(message, key, true);
  }

  decrypt(message, key) {
    return this.process(message, key, false);
  }

  process(message, key, isEncrypt) {
    if (typeof message !== 'string' || typeof key !== 'string' || !message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const msg = message.toUpperCase();
    const k = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (const ch of msg) {
      const chPos = ALPHABET.indexOf(ch);
      if (chPos === -1) {
        result += ch;
        continue;
      }
      const keyPos = ALPHABET.indexOf(k[keyIndex % k.length]);
      keyIndex++;
      const shifted = isEncrypt
        ? (chPos + keyPos) % 26
        : (chPos - keyPos + 26) % 26;
      result += ALPHABET[shifted];
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
