function romanToInt(s: string): number {
  let charList = ["I", "V", "X", "L", "C", "D", "M"];
  let valueList = [1, 5, 10, 50, 100, 500, 1000];

  const valueMap = new Map();

  charList.forEach((x, i) => valueMap.set(x, valueList[i]));

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i == s.length - 1) {
      sum = sum + valueMap.get(s[i]);
      break;
    }
    let curr = s[i];
    let next = s[i + 1];
    if (valueMap.get(curr) < valueMap.get(next)) {
      sum = sum - valueMap.get(curr);
    } else {
      sum = sum + valueMap.get(curr);
    }
  }

  return sum;
}

console.log(romanToInt("LVIII"));
