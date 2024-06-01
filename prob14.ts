function longestCommonPrefix(strs: string[]): string {
  let result = "";
  let pointer = 0;
  function updateCurrValue() {
    return strs[0][pointer];
  }
  let currValue = updateCurrValue();
  let j = 0;
  let endProgram = false;

  while (j < strs[0].length) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][pointer] !== currValue) {
        endProgram = true;
        break;
      }
    }
    if (endProgram) {
      break;
    } else {
      pointer++;
      result += currValue;
      currValue = updateCurrValue();
      j++;
    }
  }
  return result;
}

let x = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(x));
