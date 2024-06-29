function isValid(s: string): boolean {
  const openBrackets = "({[";
  const closeBrackets = ")}]";
  let ans = true;

  let stack: number[] = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    const elementChar = s[index].charCodeAt(0);
    const lastElem = stack[stack.length - 1];
    if (openBrackets.includes(element)) {
      stack.push(elementChar);
    }
    if (closeBrackets.includes(element)) {
      if (stack.length == 0) {
        ans = false;
        break;
      }

      if (lastElem + 1 == elementChar || lastElem + 2 == elementChar) {
        stack.pop();
      } else {
        ans = false;
      }
    }
  }
  if (stack.length !== 0) {
    ans = false;
  }

  return ans;
}

let s = "[]{}";

console.log(isValid(s));
