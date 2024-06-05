class Solution {
  /**
   * Encodes a list of strings to a single string.
   * @param {string[]} strs - Array of strings to encode
   * @returns {string} - Encoded string
   */
  encode(strs: string[]): string {
    const length = strs.length;
    const a = Math.floor(length / 100);
    const b = Math.floor((length % 100) / 10);
    const c = length % 10;
    let prepend = `${a}${b}${c}`;
    let append = "";

    for (let i = 0; i < length; i++) {
      const lengthOfElem = strs[i].length;
      const a = Math.floor(lengthOfElem / 100);
      const b = Math.floor((lengthOfElem % 100) / 10);
      const c = lengthOfElem % 10;
      prepend += `${a}${b}${c}`;
      append += strs[i];
    }
    return prepend + append;
  }

  /**
   * Decodes a single string to a list of strings.
   * @param {string} str - Encoded string
   * @returns {string[]} - Decoded array of strings
   */
  decode(str: string): string[] {
    const length = Number(str.substring(0, 3));
    const actualString = str.substring(3 + length * 3);
    const arrElemLength: number[] = [];
    const result: string[] = [];

    for (let i = 1; i <= length; i++) {
      arrElemLength.push(Number(str.substring(i * 3, i * 3 + 3)));
    }

    for (let i = 0, p1 = 0; i < length; i++) {
      result.push(actualString.substring(p1, p1 + arrElemLength[i]));
      p1 += arrElemLength[i];
    }
    return result;
  }
}

const solution = new Solution();

let a = ["we", "say", ":", "yes"];

let encoded = solution.encode(a);
let decoded = solution.decode(encoded);
console.log(encoded);
console.log(decoded);
